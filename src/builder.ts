import { BuilderContext, BuilderOutput } from '@angular-devkit/architect';

import { BuilderOptions } from './builder.model';
import { lint } from './lint';
import { loadProjectStylelint } from './load-project-stylelint';
import { shouldPrintInfo } from './should-print-info';

export async function builder(options: BuilderOptions, context: BuilderContext): Promise<BuilderOutput> {
  const systemRoot = context.workspaceRoot;

  process.chdir(context.currentDirectory);

  const projectName = (context.target && context.target.project) || '<???>';

  const printInfo = shouldPrintInfo(options);

  let status = `Running stylelint for project ${JSON.stringify(projectName)}...`;

  context.reportStatus(status);

  if (printInfo) {
    context.logger.info(status);
  }

  const projectStylelint = await loadProjectStylelint();

  options.configBasedir = systemRoot;

  const report = await lint(projectStylelint, options);

  if (printInfo) {
    context.logger.info(report.output);

    if (report.hasWarnings) {
      context.logger.warn('stylelint found warnings in the listed files.');
    }

    if (report.hasErrors) {
      context.logger.error('stylelint found errors in the listed files.');
    }

    if (report.isSuccess) {
      context.logger.info('All files passed linting.');
    }
  }

  return {
    success: (options.force as boolean) || report.isSuccess
  };
}
