import { BuilderContext } from '@angular-devkit/architect';

import { BuilderOptions } from './builder.model';

export function normalizeRootPath(options: BuilderOptions, context: BuilderContext): BuilderOptions {
  process.chdir(context.currentDirectory);

  return {
    ...options,
    configBasedir: context.workspaceRoot
  };
}
