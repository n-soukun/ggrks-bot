import { ApplicationCommandType, ContextMenuCommandBuilder } from "discord.js";
import { wraper } from "discordjs-builder-wraper";
import GgrksModal from "../../components/modals/ggrks-modal";

export default wraper
  .setCtxCommand(
    new ContextMenuCommandBuilder().setName("ggrks").setDMPermission(false)
  )
  .setType(ApplicationCommandType.Message)
  .setProcess(async ({ interaction }) => {
    const modal = GgrksModal.component(undefined, [interaction.targetId]);
    interaction.showModal(modal);
  });
