import * as stylelint from 'stylelint';

import { BuilderOptions, LintReport } from './builder.model';
import { getReportFlags } from './get-report-flags';

export async function lint(projectStylelint: typeof stylelint, options: BuilderOptions): Promise<LintReport> {
  const report = await projectStylelint.lint({
    ...(options as Partial<stylelint.LinterOptions>),
    formatter: (options.formatter as keyof typeof stylelint.formatters) || 'string'
  });

  const reportFlags = getReportFlags(report);

  return {
    output: report.output,
    ...reportFlags,
    isSuccess: options.force === true || (!reportFlags.hasWarnings && !reportFlags.hasErrors)
  };
}
