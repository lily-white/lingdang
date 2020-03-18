import * as React from 'react';
import { StandardProps } from '..';

export interface ExpansionPanelDetailsProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ExpansionPanelDetailsClassKey> {}

export type ExpansionPanelDetailsClassKey = 'root';

/**
 *
 * Demos:
 *
 * - [Expansion Panels](https://material-ui.com/components/expansion-panels/)
 *
 * API:
 *
 * - [ExpansionPanelDetails API](https://material-ui.com/api/expansion-panel-details/)
 */
declare const ExpansionPanelDetails: React.ComponentType<ExpansionPanelDetailsProps>;

export default ExpansionPanelDetails;
