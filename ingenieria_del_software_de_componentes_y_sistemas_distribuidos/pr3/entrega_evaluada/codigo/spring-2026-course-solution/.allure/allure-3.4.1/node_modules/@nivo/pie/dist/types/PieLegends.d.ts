import { CompletePieSvgProps, DatumId, LegendDatum } from './types';
interface PieLegendsProps<RawDatum> {
    width: number;
    height: number;
    legends: CompletePieSvgProps<RawDatum>['legends'];
    data: LegendDatum<RawDatum>[];
    toggleSerie: (id: DatumId) => void;
}
export declare const PieLegends: <RawDatum>({ width, height, legends, data, toggleSerie, }: PieLegendsProps<RawDatum>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PieLegends.d.ts.map