
export type SystemSizes = 'xxs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxl';
export type SystemSpaceKeys = 'p' | 'pl' | 'pr' | 'pt' | 'pb' | 'px' | 'py' | 'm' | 'ml' | 'mr' | 'mt' | 'mb' | 'mx' | 'my';
export type SystemSpaces = Array<{[key in SystemSpaceKeys]?: SystemSizes}>;


const getFirstKey = (obj) => Object.keys(obj).shift()

export const mapSpaceStyles = (spaces) => spaces.reduce((acc, space) => {
  const key = getFirstKey(space);
  return {
    ...acc,
    ['padding']: `var(--space-${space[key]})`
  }
}, {})
