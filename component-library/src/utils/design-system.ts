
export type SystemSizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxl';
export type SystemSpaceKeys = 'p' | 'pl' | 'pr' | 'pt' | 'pb' | 'm' | 'ml' | 'mr' | 'mt' | 'mb';
export type SystemSpaces = Array<{[key in SystemSpaceKeys]?: SystemSizes}>;

const cssClassesMap = {
  p: 'padding',
  m: 'margin',
  l: 'Left',
  r: 'Right',
  b: 'Bottom',
  t: 'Top',
}


const getFirstKey = (obj: any) => Object.keys(obj).shift()

const getCssKey = (key: string) => key.split('').reduce((acc, char) => {
  return (acc) ? `${acc}-${cssClassesMap[char]}` : `${cssClassesMap[char]}`;
}, null);

export const mapSpaceStyles = (spaces) => spaces.reduce((acc, space) => {
  const key = getFirstKey(space);
  return {
    ...acc,
    [getCssKey(key)]: `var(--space-${space[key]})`
  }
}, {})
