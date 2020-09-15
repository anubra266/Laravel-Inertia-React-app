/**
 * Converts date to human readable format
 * @param {object} date Date Object to format
 */
export function useHumanDate(date) {
    const options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    };
    return new Date(date).toLocaleString(undefined, options);
}
/**
 * Converts date to format acceptable in database
 * @param {object} date date object to format
 */
export function useDbDate(date) {
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    var hours = ("0" + date.getHours()).slice(-2);
    var minutes = ("0" + date.getMinutes()).slice(-2);
    var seconds = "00";

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; //2020-08-29 23:02:00
}
/**
 * Formats date in ant form to normal format
 * @param {object} data form form data to be submitted
 */
export function useAntDate(data) {
    data.start_time = this.dbdate(data.period[0]._d);
    data.deadline = this.dbdate(data.period[1]._d);
    return data;
}
