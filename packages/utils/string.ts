export function changeAliasName(str: string) {
  return str.replace(/@/, '').replace(/\//g, '-');
}
