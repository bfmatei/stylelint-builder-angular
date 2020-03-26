import { json } from '@angular-devkit/core';
import { LinterResult } from 'stylelint';

import * as SchemaBuilderOptions from './schema.json';

export type BuilderOptions = typeof SchemaBuilderOptions & json.JsonObject;

export interface EnhancedLintResult extends LinterResult {
  hasWarnings: boolean;
  hasErrors: boolean;
}
