/*! Built with http://stenciljs.com */
const { h } = window.ComponentLibrary;

const cssClassesMap = {
    p: 'padding',
    m: 'margin',
    l: 'left',
    r: 'right'
};
const getFirstKey = (obj) => Object.keys(obj).shift();
const getCssKey = (key) => key.split('').reduce((acc, char) => {
    return (acc) ? `${acc}-${cssClassesMap[char]}` : `${cssClassesMap[char]}`;
}, null);
const mapSpaceStyles = (spaces) => spaces.reduce((acc, space) => {
    const key = getFirstKey(space);
    return Object.assign({}, acc, { [getCssKey(key)]: `var(--space-${space[key]})` });
}, {});

export { mapSpaceStyles as a };
