import { azure } from "./azure";
import {cider} from "./cider";
import {cloud} from "./cloud";
import {crimson} from "./crimson";
import {emerald} from "./emerald";
import {forest} from "./forest";
import {neutral,neutralDark} from "./neutral";
import {sapphire} from "./sapphire";
import {sea} from "./sea";

export const commonColors = {
  white: "#ffffff",
  black: "#000000",
  azure,
    cider,
    cloud,
    crimson,
    emerald,
    forest,
    neutral,
    neutralDark,
    sapphire,
    sea
};

export type CommonColors = typeof commonColors;