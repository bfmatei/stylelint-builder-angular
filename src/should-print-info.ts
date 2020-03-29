import { BuilderOptions } from './builder.model';

const machineReadableFormatters = ['codeframe'];

// Print formatter output only for non human-readable formats.
export function shouldPrintInfo(options: BuilderOptions): boolean {
  return !options.silent && !machineReadableFormatters.includes(options.format as string);
}
