"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getQueryParams = (query) => {
    const queryList = Object.keys(query).reduce((acc, key) => {
        if (query[key]) {
            acc.push(`${key}=${query[key]}`);
        }
        return acc;
    }, []);
    return `?${queryList.join("&")}`;
};
module.exports = getQueryParams;
//# sourceMappingURL=getQueryParams.js.map