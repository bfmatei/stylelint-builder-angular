import { BuilderContext } from '@angular-devkit/architect';

import { LintReport } from './builder.model';

export function printOutput(shouldLog: boolean, report: LintReport, context: BuilderContext) {
  let status = '';

  if (report.hasErrors) {
    status = 'stylelint found errors in the listed files.';
  } else if (report.hasWarnings) {
    status = 'stylelint found warnings in the listed files.';
  } else if (report.isSuccess) {
    status = 'All files passed linting with stylelint.';
  }

  context.reportStatus(status);

  if (shouldLog) {
    context.logger.info(report.output);

    if (report.hasWarnings) {
      context.logger.warn(status);
    }

    if (report.hasErrors) {
      context.logger.error(status);
    }

    if (report.isSuccess) {
      context.logger.info(status);
    }
  }
}
