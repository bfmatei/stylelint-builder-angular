import { BuilderContext, BuilderOutput } from '@angular-devkit/architect';

import { BuilderOptions } from './builder.model';
import { lint } from './lint';
import { loadProjectStylelint } from './load-project-stylelint';

export async function builder(options: BuilderOptions, context: BuilderContext): Promise<BuilderOutput> {
  const systemRoot = context.workspaceRoot;

  process.chdir(context.currentDirectory);

  const projectName = (context.target && context.target.project) || '<???>';

  // Print formatter output only for non human-readable formats.
  const printInfo = !options.silent && options.format !== 'json';

  let status = `Running stylelint for project ${JSON.stringify(projectName)}...`;

  context.reportStatus(status);

  if (printInfo) {
    context.logger.info(status);
  }

  const projectStylelint = await loadProjectStylelint();

  options.configBasedir = systemRoot;

  const result = await lint(projectStylelint, options);

  if (printInfo) {
    context.logger.info(projectStylelint.formatters.string(result.results));

    if (result.hasWarnings) {
      context.logger.warn('stylelint found warnings in the listed files.');
    }

    if (result.hasErrors) {
      context.logger.error('stylelint found errors in the listed files.');
    }

    if (!result.errored) {
      context.logger.info('All files passed linting.');
    }
  }

  return {
    success: (options.force as boolean) || result.errored
  };
}
