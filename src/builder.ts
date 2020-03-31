import { BuilderContext, BuilderOutput } from '@angular-devkit/architect';

import { BuilderOptions } from './builder.model';
import { getShouldLog } from './get-should-log';
import { lint } from './lint';
import { loadProjectStylelint } from './load-project-stylelint';
import { normalizeRootPath } from './normalize-root-path';
import { printInput } from './print-input';
import { printOutput } from './print-output';

export async function builder(options: BuilderOptions, context: BuilderContext): Promise<BuilderOutput> {
  const normalizedOptions = normalizeRootPath(options, context);

  const shouldLog = getShouldLog(normalizedOptions);

  printInput(shouldLog, context);

  const projectStylelint = await loadProjectStylelint();

  const report = await lint(projectStylelint, options);

  printOutput(shouldLog, report, context);

  return {
    success: report.isSuccess
  };
}
