/*eslint-disable */
export const ping = store => next => action => {
    console.log(`Type of action: ${action.type}. Data: ${action.payload}`);
    return next(action)
};
/*eslint-enable */