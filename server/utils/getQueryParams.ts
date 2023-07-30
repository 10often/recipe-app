const getQueryParams = (query): string => {
  const queryList = Object.keys(query).reduce((acc: string[], key) => {
    if (query[key]) {
      acc.push(`${key}=${query[key]}`);
    }
    return acc;
  }, []);
  return `?${queryList.join("&")}`;
};

module.exports = getQueryParams;
