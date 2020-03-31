import { BuilderOptions } from './builder.model';

const humanReadableFormatters = ['compact', 'string', 'unix', 'verbose'];

export function getShouldLog(options: BuilderOptions): boolean {
  return !options.silent && (!options.format || humanReadableFormatters.includes(options.format as string));
}
