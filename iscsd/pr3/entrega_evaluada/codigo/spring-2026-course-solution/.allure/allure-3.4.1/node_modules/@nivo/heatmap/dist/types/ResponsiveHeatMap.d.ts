import { ReactElement } from 'react';
import { WithChartRef, ResponsiveProps } from '@nivo/core';
import { DefaultHeatMapDatum, HeatMapDatum, HeatMapSvgProps } from './types';
export declare const ResponsiveHeatMap: <Datum extends HeatMapDatum = DefaultHeatMapDatum, ExtraProps extends object = Record<string, never>>(props: WithChartRef<ResponsiveProps<HeatMapSvgProps<Datum, ExtraProps>>, SVGSVGElement>) => ReactElement;
//# sourceMappingURL=ResponsiveHeatMap.d.ts.map