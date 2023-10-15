import { SlashCommandBuilder } from "discord.js";
import { wraper } from "discordjs-builder-wraper";

export default wraper
  .setCommand(
    new SlashCommandBuilder()
      .setName("ggrks")
      .setDescription("他力本願で残念な人に送るリンクを生成します")
      .addStringOption((option) =>
        option
          .setName("keyword")
          .setDescription("検索キーワード")
          .setRequired(true)
      )
  )
  .setProcess(({ interaction }) => {
    const keyword = interaction.options.getString("keyword", true);
    const encodedKeyword = encodeURIComponent(keyword);
    const url = `https://ggrks.world/${encodedKeyword}`;
    interaction.reply(url);
  });
