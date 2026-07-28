import { ArcGenerator } from '@nivo/arcs';
import { ComputedDatum, CompletePieSvgProps } from './types';
interface ArcsProps<RawDatum> {
    center: [number, number];
    data: ComputedDatum<RawDatum>[];
    arcGenerator: ArcGenerator;
    borderWidth: CompletePieSvgProps<RawDatum>['borderWidth'];
    borderColor: CompletePieSvgProps<RawDatum>['borderColor'];
    isInteractive: CompletePieSvgProps<RawDatum>['isInteractive'];
    onClick?: CompletePieSvgProps<RawDatum>['onClick'];
    onMouseEnter?: CompletePieSvgProps<RawDatum>['onMouseEnter'];
    onMouseMove?: CompletePieSvgProps<RawDatum>['onMouseMove'];
    onMouseLeave?: CompletePieSvgProps<RawDatum>['onMouseLeave'];
    setActiveId: (id: null | string | number) => void;
    tooltip: CompletePieSvgProps<RawDatum>['tooltip'];
    transitionMode: CompletePieSvgProps<RawDatum>['transitionMode'];
}
export declare const Arcs: <RawDatum>({ center, data, arcGenerator, borderWidth, borderColor, isInteractive, onClick, onMouseEnter, onMouseMove, onMouseLeave, setActiveId, tooltip, transitionMode, }: ArcsProps<RawDatum>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Arcs.d.ts.map