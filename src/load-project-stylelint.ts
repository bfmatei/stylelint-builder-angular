import * as stylelint from 'stylelint';

export async function loadProjectStylelint(): Promise<typeof stylelint> {
  let lib;

  try {
    lib = await import('stylelint');
  } catch {
    throw new Error('Unable to find stylelint. Is it installed?');
  }

  return lib;
}
