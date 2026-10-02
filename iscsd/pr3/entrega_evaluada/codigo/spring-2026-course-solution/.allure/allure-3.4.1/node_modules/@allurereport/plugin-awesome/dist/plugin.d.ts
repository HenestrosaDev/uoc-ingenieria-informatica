import { type AllureStore, type Plugin, type PluginContext, type PluginSummary } from "@allurereport/plugin-api";
import type { AwesomePluginOptions } from "./model.js";
export declare class AwesomePlugin implements Plugin {
    #private;
    readonly options: AwesomePluginOptions;
    constructor(options?: AwesomePluginOptions);
    start: (context: PluginContext) => Promise<void>;
    update: (context: PluginContext, store: AllureStore) => Promise<void>;
    done: (context: PluginContext, store: AllureStore) => Promise<void>;
    info(context: PluginContext, store: AllureStore): Promise<PluginSummary>;
}
