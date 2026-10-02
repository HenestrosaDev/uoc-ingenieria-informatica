import { type TestFixtureResult, type TestResult, type TestStepResult } from "@allurereport/core-api";
import type { AwesomeFixtureResult, AwesomeTestResult, AwesomeTestStepResult } from "@allurereport/web-awesome";
export declare const convertTestResult: (tr: TestResult, options?: {
    hideLabels?: readonly (string | RegExp)[];
}) => AwesomeTestResult;
export declare const convertTestStepResult: (tsr: TestStepResult) => AwesomeTestStepResult;
export declare const convertFixtureResult: (fr: TestFixtureResult) => AwesomeFixtureResult;
