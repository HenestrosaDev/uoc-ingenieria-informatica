import { TransitionFn } from '@react-spring/web';
import { DatumWithArc } from './types';
import { ArcTransitionMode, TransitionExtra, ArcTransitionProps } from './arcTransitionMode';
/**
 * This hook can be used to animate a group of arcs,
 * if you want to animate a single arc,
 * please have a look at the `useAnimatedArc` hook.
 */
export declare const useArcsTransition: <Datum extends DatumWithArc, ExtraProps extends Record<string, any> = Record<string, never>>(data: Datum[], mode?: ArcTransitionMode, extra?: TransitionExtra<Datum, ExtraProps>) => {
    transition: TransitionFn<Datum, ArcTransitionProps<ExtraProps>>;
    interpolate: (startAngleValue: import("@react-spring/core").SpringValue<number>, endAngleValue: import("@react-spring/core").SpringValue<number>, innerRadiusValue: import("@react-spring/core").SpringValue<number>, outerRadiusValue: import("@react-spring/core").SpringValue<number>, arcGenerator: import("./types").ArcGenerator) => import("@react-spring/core").Interpolation<string | null, any>;
};
//# sourceMappingURL=useArcsTransition.d.ts.map