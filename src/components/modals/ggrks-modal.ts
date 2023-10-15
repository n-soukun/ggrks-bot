import {
  ActionRowBuilder,
  ModalActionRowComponentBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";
import { wraper } from "discordjs-builder-wraper";

const GgrksModal = wraper
  .setComponent(() =>
    new ModalBuilder()
      .setTitle("GGRKS")
      .addComponents(
        new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId("keyword")
            .setLabel("検索ワード")
            .setPlaceholder("検索ワードを入力してください")
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
        )
      )
  )
  .useArgs((z) => z.length(1))
  .setProcess(async ({ interaction, args }) => {
    const messageId = args[0];
    const keyword = interaction.fields.getTextInputValue("keyword");
    const encodedKeyword = encodeURIComponent(keyword);
    const url = `https://ggrks.world/${encodedKeyword}`;
    const message = await interaction.channel?.messages.fetch(messageId);
    if (message) {
      await message.reply(url);
    }
    interaction.deferUpdate();
  });

export default GgrksModal;
