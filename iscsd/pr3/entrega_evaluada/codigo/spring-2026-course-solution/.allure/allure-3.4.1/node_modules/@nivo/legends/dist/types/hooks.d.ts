type Scale = {
    (value: number): number;
    invertExtent: (value: number) => [number, number];
    range: () => number[];
};
export declare const useQuantizeColorScaleLegendData: ({ scale, domain: overriddenDomain, reverse, valueFormat, separator, }: {
    scale: Scale;
    domain?: number[];
    reverse?: boolean;
    valueFormat?: <T, U>(value: T) => T | U;
    separator?: string;
}) => {
    id: number;
    index: number;
    extent: number[];
    label: string;
    value: number;
    color: number;
}[];
export {};
//# sourceMappingURL=hooks.d.ts.map