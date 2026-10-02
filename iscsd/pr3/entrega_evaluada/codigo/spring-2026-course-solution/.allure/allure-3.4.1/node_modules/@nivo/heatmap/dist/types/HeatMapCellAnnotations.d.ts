import { ComputedCell, HeatMapCommonProps, HeatMapDatum } from './types';
interface HeatMapCellAnnotationsProps<Datum extends HeatMapDatum> {
    cells: ComputedCell<Datum>[];
    annotations: NonNullable<HeatMapCommonProps<Datum>['annotations']>;
}
export declare const HeatMapCellAnnotations: <Datum extends HeatMapDatum>({ cells, annotations, }: HeatMapCellAnnotationsProps<Datum>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=HeatMapCellAnnotations.d.ts.map