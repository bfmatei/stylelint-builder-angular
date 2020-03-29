import * as stylelint from 'stylelint';

import { BuilderOptions, LintReport } from './builder.model';
import { getWarningErrorsFlags } from './get-warning-errors-flags';

export async function lint(projectStylelint: typeof stylelint, options: BuilderOptions): Promise<LintReport> {
  const report = await projectStylelint.lint(options as Partial<stylelint.LinterOptions>);

  const warningErrorsFlags = getWarningErrorsFlags(report);

  return {
    output: report.output,
    ...warningErrorsFlags,
    isSuccess: !warningErrorsFlags.hasWarnings && !warningErrorsFlags.hasErrors
  };
}
