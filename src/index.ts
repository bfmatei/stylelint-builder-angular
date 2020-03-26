import { createBuilder } from '@angular-devkit/architect';

import { BuilderOptions } from './builder.model';
import { builder } from './builder';

export default createBuilder<BuilderOptions>(builder);
