import type { TestResult } from "@allurereport/core-api";
import type { AwesomeOptions } from "./model.js";
type Writer = {
    writeWidget(fileName: string, data: any): Promise<void>;
};
export declare const generateTimeline: (writer: Writer, trs: TestResult[], options: AwesomeOptions, environmentIdByTrId: Map<string, string>) => Promise<void>;
export {};
