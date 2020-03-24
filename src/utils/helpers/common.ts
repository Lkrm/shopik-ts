const propOr = (or: any, propName: string | number, object: any)  => {
    return object ? (propName in object ? object[propName] : or) : or;
};
export {
    propOr,
}