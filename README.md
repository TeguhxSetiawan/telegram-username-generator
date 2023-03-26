# Telegram Username Generator

This is a simple Telegram bot that generates random usernames for your Telegram account. The bot is built using Deno and deployed on a server with Deno Deploy. It uses the Webhook method to receive updates from Telegram's API.

# How to use

To use the bot, simply start a chat with it on Telegram by searching for https://t.me/teleusernamegenerator_bot. Once the chat is started, the bot will send you a welcome message and a button to generate a new username.

# Features
- Generates random usernames using a combination of words and numbers from pre-defined dictionaries.
- Allows the user to generate a new username by pressing a button.
- Provides a list of suggested usernames for the user to choose from.
- Sends a warning message to the user before generating a new username to inform them that the bot won't automatically change their current Telegram username.

# Dependencies

- GrammY: a Telegram bot framework based on Telegraf using TypeScript on Deno environment.
- telegram-bot-api: used to communicate with Telegram's API.
- unique-names-generator: used to generate random usernames. Based on 'npm' library.
- dotenv: used to load environment variables.

# Deployment

- This bot is deployed on Deno Deploy.
- The method being used is Webhook (https://grammy.dev/guide/deployment-types.html) using Telegram's API.
- Created by Typescript, all dependencies are imported from fully supported available npm CDNs.


