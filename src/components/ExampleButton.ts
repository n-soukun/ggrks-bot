import { ButtonBuilder, ButtonStyle } from "discord.js";
import { wraper } from "discordjs-builder-wraper";

const helloWorldButton = wraper
  .setComponent(() =>
    new ButtonBuilder().setLabel("Greet").setStyle(ButtonStyle.Primary)
  )
  .setProcess(({ interaction }) => {
    interaction.reply("hello, world!");
  });

export default helloWorldButton;
