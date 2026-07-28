import { ReactElement } from 'react';
import { ResponsiveProps, WithChartRef } from '@nivo/core';
import { DefaultHeatMapDatum, HeatMapCanvasProps, HeatMapDatum } from './types';
export declare const ResponsiveHeatMapCanvas: <Datum extends HeatMapDatum = DefaultHeatMapDatum, ExtraProps extends object = Record<string, never>>(props: WithChartRef<ResponsiveProps<HeatMapCanvasProps<Datum, ExtraProps>>, HTMLCanvasElement>) => ReactElement;
//# sourceMappingURL=ResponsiveHeatMapCanvas.d.ts.map