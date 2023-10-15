import { SlashCommandBuilder } from "discord.js";
import { wraper } from "discordjs-builder-wraper";

export default wraper
  .setCommand(
    new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Send button and message!")
  )
  .setProcess(({ interaction }) => {
    interaction.reply("Pong!");
  });
