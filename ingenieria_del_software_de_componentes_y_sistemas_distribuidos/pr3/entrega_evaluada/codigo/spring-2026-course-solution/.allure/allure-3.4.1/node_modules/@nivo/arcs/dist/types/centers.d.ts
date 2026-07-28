import { SpringValue, TransitionFn } from '@react-spring/web';
import { Arc, DatumWithArc, Point } from './types';
import { ArcTransitionMode, ArcTransitionProps, TransitionExtra } from './arcTransitionMode';
export declare const computeArcCenter: (arc: Arc, offset: number) => Point;
export declare const interpolateArcCenter: (offset: number) => (startAngleValue: SpringValue<number>, endAngleValue: SpringValue<number>, innerRadiusValue: SpringValue<number>, outerRadiusValue: SpringValue<number>) => import("@react-spring/core").Interpolation<string, any>;
export declare const useArcCentersTransition: <Datum extends DatumWithArc, ExtraProps extends Record<string, any> = Record<string, never>>(data: Datum[], offset?: number, mode?: ArcTransitionMode, extra?: TransitionExtra<Datum, ExtraProps>) => {
    transition: TransitionFn<Datum, ArcTransitionProps<ExtraProps>>;
    interpolate: (startAngleValue: SpringValue<number>, endAngleValue: SpringValue<number>, innerRadiusValue: SpringValue<number>, outerRadiusValue: SpringValue<number>) => import("@react-spring/core").Interpolation<string, any>;
};
export interface ArcCenter<Datum extends DatumWithArc> extends Point {
    data: Datum;
}
/**
 * Compute an array of arc centers from an array of data containing arcs.
 *
 * If you plan to animate those, you could use `useArcCentersTransition`
 * instead, you could use the returned array with react-spring `useTransition`,
 * but this would lead to cartesian transitions (x/y), while `useArcCentersTransition`
 * will generate proper transitions using radius/angle.
 */
export declare const useArcCenters: <Datum extends DatumWithArc, ExtraProps extends Record<string, any> = Record<string, never>>({ data, offset, skipAngle, computeExtraProps, }: {
    data: Datum[];
    offset?: number;
    skipAngle?: number;
    computeExtraProps?: (datum: Datum) => ExtraProps;
}) => (ArcCenter<Datum> & ExtraProps)[];
//# sourceMappingURL=centers.d.ts.map