import { BarLegendProps, LegendData } from './types';
interface BarLegendsProps {
    width: number;
    height: number;
    legends: [BarLegendProps, LegendData[]][];
    toggleSerie: (id: string | number) => void;
}
export declare const BarLegends: ({ width, height, legends, toggleSerie }: BarLegendsProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BarLegends.d.ts.map