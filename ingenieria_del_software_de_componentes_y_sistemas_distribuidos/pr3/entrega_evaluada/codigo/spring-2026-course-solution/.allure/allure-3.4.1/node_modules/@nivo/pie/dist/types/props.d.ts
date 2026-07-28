import { OrdinalColorScaleConfig } from '@nivo/colors';
import { ArcTransitionMode } from '@nivo/arcs';
export declare const defaultProps: {
    id: string;
    value: string;
    sortByValue: boolean;
    innerRadius: number;
    padAngle: number;
    cornerRadius: number;
    layers: string[];
    startAngle: number;
    endAngle: number;
    fit: boolean;
    activeInnerRadiusOffset: number;
    activeOuterRadiusOffset: number;
    borderWidth: number;
    borderColor: {
        from: string;
        modifiers: (string | number)[][];
    };
    enableArcLabels: boolean;
    arcLabel: string;
    arcLabelsSkipAngle: number;
    arcLabelsSkipRadius: number;
    arcLabelsRadiusOffset: number;
    arcLabelsTextColor: {
        theme: string;
    };
    enableArcLinkLabels: boolean;
    arcLinkLabel: string;
    arcLinkLabelsSkipAngle: number;
    arcLinkLabelsOffset: number;
    arcLinkLabelsDiagonalLength: number;
    arcLinkLabelsStraightLength: number;
    arcLinkLabelsThickness: number;
    arcLinkLabelsTextOffset: number;
    arcLinkLabelsTextColor: {
        theme: string;
    };
    arcLinkLabelsColor: {
        theme: string;
    };
    colors: OrdinalColorScaleConfig;
    defs: never[];
    fill: never[];
    isInteractive: boolean;
    animate: boolean;
    motionConfig: string;
    transitionMode: ArcTransitionMode;
    tooltip: <RawDatum>({ datum }: {
        datum: import("./types").ComputedDatum<RawDatum>;
    }) => import("react/jsx-runtime").JSX.Element;
    legends: never[];
    role: string;
    pixelRatio: number;
};
//# sourceMappingURL=props.d.ts.map