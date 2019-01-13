export type systemSizes = 'xxs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxl';
export type systemSpaceKeys = 'p' | 'pl' | 'pr' | 'pt' | 'pb' | 'px' | 'py' | 'm' | 'ml' | 'mr' | 'mt' | 'mb' | 'mx' | 'my';

export type systemSpaces = Array<{[key in systemSpaceKeys]?: systemSizes}>;
