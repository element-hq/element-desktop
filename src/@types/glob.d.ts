import { GlobOptions } from "glob";

declare module "glob" {
    // Workaround for @electron/asar importing IOptions instead of GlobOptions
    export type IOptions = GlobOptions;
}
