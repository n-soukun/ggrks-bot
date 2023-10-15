import path from "node:path";
import { collectBuilder } from "discordjs-builder-wraper";

export const { commandDataJSON, handler } = collectBuilder(
  path.join(__dirname, "./commands"),
  path.join(__dirname, "./components")
);
