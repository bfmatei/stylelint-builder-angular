import * as stylelint from 'stylelint';

import { Severity, WarningsErrorsFlags } from './builder.model';

const initialWarningsErrorsFlags: WarningsErrorsFlags = {
  hasWarnings: false,
  hasErrors: false
};

export function getWarningErrorsFlags(report: stylelint.LinterResult): WarningsErrorsFlags {
  return report.results
    .map((result) => result.warnings)
    .flat()
    .reduce(
      (acc, warning) => ({
        hasWarnings: acc.hasWarnings || warning.severity === Severity.WARN,
        hasErrors: acc.hasErrors || warning.severity === Severity.ERROR
      }),
      initialWarningsErrorsFlags
    );
}
