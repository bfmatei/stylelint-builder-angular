import * as stylelint from 'stylelint';

import { ReportFlags, Severity } from './builder.model';

const initialWarningsErrorsFlags: ReportFlags = {
  hasWarnings: false,
  hasErrors: false
};

export function getReportFlags(report: stylelint.LinterResult): ReportFlags {
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
