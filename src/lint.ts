import * as stylelint from 'stylelint';

import { BuilderOptions, EnhancedLintResult } from './builder.model';

function hasBySeverity(result: stylelint.LintResult, severity: stylelint.Severity): boolean {
  return result.warnings.some((result) => result.severity === severity);
}

export async function lint(projectStylelint: typeof stylelint, options: BuilderOptions): Promise<EnhancedLintResult> {
  const result = await projectStylelint.lint(options as Partial<stylelint.LinterOptions>);

  const warningErrorsFlags = result.results.reduce(
    (acc, result) => ({
      hasWarnings: acc.hasWarnings || hasBySeverity(result, 'warning'),
      hasErrors: acc.hasErrors || hasBySeverity(result, 'error')
    }),
    {
      hasWarnings: false,
      hasErrors: false
    }
  );

  return {
    ...result,
    ...warningErrorsFlags
  };
}