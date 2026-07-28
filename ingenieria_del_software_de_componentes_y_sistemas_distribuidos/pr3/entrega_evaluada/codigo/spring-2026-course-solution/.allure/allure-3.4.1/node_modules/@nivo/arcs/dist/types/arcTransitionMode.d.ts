import { Arc, DatumWithArc } from './types';
export interface ArcTransitionModeConfig {
    enter: (arc: Arc) => Arc;
    update: (arc: Arc) => Arc;
    leave: (arc: Arc) => Arc;
}
export declare const arcTransitionModes: readonly ["startAngle", "middleAngle", "endAngle", "innerRadius", "centerRadius", "outerRadius", "pushIn", "pushOut"];
export type ArcTransitionMode = (typeof arcTransitionModes)[number];
export declare const arcTransitionModeById: Record<ArcTransitionMode, ArcTransitionModeConfig>;
export interface TransitionExtra<Datum extends DatumWithArc, ExtraProps extends Record<string, any> = Record<string, never>> {
    enter: (datum: Datum) => ExtraProps;
    update: (datum: Datum) => ExtraProps;
    leave: (datum: Datum) => ExtraProps;
}
export type ArcTransitionProps<ExtraProps extends Record<string, any> = Record<string, never>> = Arc & {
    progress: number;
} & ExtraProps;
export declare const useArcTransitionMode: <Datum extends DatumWithArc, ExtraProps extends Record<string, any> = Record<string, never>>(mode: ArcTransitionMode, extraTransition?: TransitionExtra<Datum, ExtraProps>) => {
    enter: (datum: Datum) => ArcTransitionProps<ExtraProps>;
    update: (datum: Datum) => ArcTransitionProps<ExtraProps>;
    leave: (datum: Datum) => ArcTransitionProps<ExtraProps>;
};
//# sourceMappingURL=arcTransitionMode.d.ts.map