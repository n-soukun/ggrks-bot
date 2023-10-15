import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

import { handler } from "./builders";

process.on("uncaughtException", console.error);
dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once("ready", () => {
  console.log(`Ready! Logged in as ${client.user?.tag}`);
});

client.on("interactionCreate", handler);

client.login(process.env.DISCORD_TOKEN);
