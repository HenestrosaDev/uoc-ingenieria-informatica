export declare const timePrecisions: readonly ["millisecond", "second", "minute", "hour", "day", "month", "year"];
export type TIME_PRECISION = (typeof timePrecisions)[number];
export declare const precisionCutOffs: ((date: Date) => void)[];
export declare const precisionCutOffsByType: Record<TIME_PRECISION, ((date: Date) => void)[]>;
export declare const createPrecisionMethod: (precision: TIME_PRECISION) => (date: Date) => Date;
export declare const createDateNormalizer: ({ format, precision, useUTC, }: {
    format?: "native" | string;
    precision?: TIME_PRECISION;
    useUTC?: boolean;
}) => (value: Date | string | undefined) => Date | undefined;
//# sourceMappingURL=timeHelpers.d.ts.map