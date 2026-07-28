import type { CategoryDefinition } from "@allurereport/core-api";
import type { AwesomeTestResult } from "@allurereport/web-awesome";
import type { AwesomeDataWriter } from "./writer.js";
export declare const applyCategoriesToTestResults: (tests: AwesomeTestResult[], categories: CategoryDefinition[]) => void;
export declare const generateCategories: (writer: AwesomeDataWriter, { tests, categories, filename, environmentCount, selectedEnvironmentCount, environments, defaultEnvironment, }: {
    tests: AwesomeTestResult[];
    categories: CategoryDefinition[];
    filename?: string;
    environmentCount?: number;
    selectedEnvironmentCount?: number;
    environments?: string[];
    defaultEnvironment?: string;
}) => Promise<void>;
