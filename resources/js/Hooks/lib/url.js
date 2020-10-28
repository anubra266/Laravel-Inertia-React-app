/**
 *  Gets value of a given query key in pageUrl
 * @param {string} key The key to extract from Url
 */
export const useUrlQuery = key => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const result = parameters.get(key);
    return result;
};
