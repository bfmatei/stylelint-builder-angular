import { BuilderContext } from '@angular-devkit/architect';

export function printInput(shouldLog: boolean, context: BuilderContext) {
  const projectName = (context.target && context.target.project) || '<???>';

  const status = `Running stylelint for project ${JSON.stringify(projectName)}...`;

  context.reportStatus(status);

  if (shouldLog) {
    context.logger.info(status);
  }
}
