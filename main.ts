import { Bot } from "./deps.deno.ts";
import { Telegraf, Markup } from "https://jspm.dev/telegraf";
import randomUsername from 'https://jspm.dev/random-username-generator';
import clipboardy from 'https://jspm.dev/clipboardy';
import { config } from 'https://jspm.dev/dotenv';
// import express from "npm:express"
config();
export const bot = new Bot(Deno.env.get('BOT_TOKEN')) && new Telegraf(Deno.env.get('BOT_TOKEN'));

bot.start((ctx) => {
  ctx.reply(
    'Welcome to Username Generator Bot! Click the button below to generate your username.',
    Markup.inlineKeyboard([
      Markup.button.callback('Generate username', 'generate'),
    ])
  );
});

bot.action(/use (.+)/, (ctx) => {
  const username = ctx.match[1];
  ctx.answerCbQuery(`You have selected @${username}`);
  ctx.editMessageText(
    `You selected @${username}, are you sure?`,
    Markup.inlineKeyboard([
      Markup.button.callback('Use this username', `copy ${username}`),
      Markup.button.callback('Generate another', 'generate'),
    ])
  );
});

bot.action(/copy (.+)/, async (ctx) => {
  const username = ctx.match[1];
  try {
    await ctx.reply('Please copy your new username below.');
    await ctx.reply(`@${username}`);
    clipboardy.write(`@${username}`);
    ctx.answerCbQuery('Please copy it manually.');
  } catch (err) {
    console.log(err);
    ctx.reply('Error copying username.');
  }
});

bot.action('generate', (ctx) => {
  const name = `${ctx.callbackQuery.from.first_name}`;
  const username = ctx.callbackQuery.from.username;
  const suggestedUsername = randomUsername.generate(username || name);
  ctx.editMessageText(
    `Hi ${name}, your current username is @${username || 'not set'}. Here's another suggestion: \n\n@${suggestedUsername}`,
    Markup.inlineKeyboard([
      Markup.button.callback('Use suggested', `use ${suggestedUsername}`),
      Markup.button.callback('Generate another', 'generate'),
    ])
  );
});


bot.start();