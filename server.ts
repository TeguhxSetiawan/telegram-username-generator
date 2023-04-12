import { serve } from "https://deno.land/std@0.154.0/http/server.ts";
import { bot } from "./main.ts";
import { webhookCallback } from "./deps.deno.ts";

const handleUpdate = webhookCallback(bot, "std/http");

serve(async (req) => {
  if (req.method == "POST") {
    const url = new URL(req.url);
    if (url.pathname.slice(1) == bot.token) {
      try {
        return await handleUpdate(req);
      } catch (err) {
        console.error(err);
      }
    }
  } else if (req.method == "GET" && req.url === "/") {
    return new Response("It works!");
  }
  return new Response();
});
