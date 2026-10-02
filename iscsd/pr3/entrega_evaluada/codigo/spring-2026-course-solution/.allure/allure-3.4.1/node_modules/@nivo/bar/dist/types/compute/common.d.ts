import { ScaleBandSpec, ScaleBand } from '@nivo/scales';
import { BarCommonProps, BarDatum } from '../types';
/**
 * Generates indexed scale.
 */
export declare const getIndexScale: <D extends BarDatum>(data: readonly D[], getIndex: (datum: D) => string, padding: number, indexScale: ScaleBandSpec, size: number, axis: "x" | "y") => ScaleBand<string>;
/**
 * This method ensures all the provided keys exist in the entire series.
 */
export declare const normalizeData: <D extends BarDatum>(data: readonly D[], keys: readonly string[]) => D[];
export declare const filterNullValues: <D extends BarDatum>(data: D) => Exclude<D, null | undefined | false | "" | 0>;
export declare const coerceValue: <T>(value: T) => readonly [T, number];
export type BarLabelLayout = {
    labelX: number;
    labelY: number;
    textAnchor: 'start' | 'middle' | 'end';
};
/**
 * Compute the label position and alignment based on a given position and offset.
 */
export declare function useComputeLabelLayout<D extends BarDatum>(layout: BarCommonProps<D>["layout"] | undefined, reverse: boolean, labelPosition?: BarCommonProps<D>['labelPosition'], labelOffset?: BarCommonProps<D>['labelOffset']): (width: number, height: number) => BarLabelLayout;
//# sourceMappingURL=common.d.ts.map