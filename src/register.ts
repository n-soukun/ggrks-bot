/* eslint-disable @typescript-eslint/no-var-requires */
import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";
import dotenv from "dotenv";
import { commandDataJSON } from "./builders";

dotenv.config();
const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;
if (!clientId) throw new Error('環境変数"DISCORD_CLIENT_ID"がありません');
if (!token) throw new Error('環境変数"DISCORD_TOKEN"がありません');

const commands = commandDataJSON();

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    if (guildId) {
      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: commands,
      });
    } else {
      await rest.put(Routes.applicationCommands(clientId), {
        body: commands,
      });
    }

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
