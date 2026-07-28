import { ComputedCell, HeatMapDatum, HeatMapSvgProps } from './types';
interface HeatMapCellsProps<Datum extends HeatMapDatum, ExtraProps extends object> {
    cells: ComputedCell<Datum>[];
    cellComponent: NonNullable<HeatMapSvgProps<Datum, ExtraProps>['cellComponent']>;
    borderRadius: NonNullable<HeatMapSvgProps<Datum, ExtraProps>['borderRadius']>;
    borderWidth: NonNullable<HeatMapSvgProps<Datum, ExtraProps>['borderWidth']>;
    isInteractive: NonNullable<HeatMapSvgProps<Datum, ExtraProps>['isInteractive']>;
    setActiveCell: (cell: ComputedCell<Datum> | null) => void;
    onMouseEnter: HeatMapSvgProps<Datum, ExtraProps>['onMouseEnter'];
    onMouseMove: HeatMapSvgProps<Datum, ExtraProps>['onMouseMove'];
    onMouseLeave: HeatMapSvgProps<Datum, ExtraProps>['onMouseLeave'];
    onClick: HeatMapSvgProps<Datum, ExtraProps>['onClick'];
    tooltip: NonNullable<HeatMapSvgProps<Datum, ExtraProps>['tooltip']>;
    enableLabels: NonNullable<HeatMapSvgProps<Datum, ExtraProps>['enableLabels']>;
}
export declare const HeatMapCells: <Datum extends HeatMapDatum, ExtraProps extends object>({ cells, cellComponent, borderRadius, borderWidth, isInteractive, setActiveCell, onMouseEnter, onMouseMove, onMouseLeave, onClick, tooltip, enableLabels, }: HeatMapCellsProps<Datum, ExtraProps>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=HeatMapCells.d.ts.map