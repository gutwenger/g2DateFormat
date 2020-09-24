function g2DateFormat(output=String, seperator=String, input=0, timezone_offset=0) {

    // Month
    let monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // Weekday
    let weekdayList = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    // Retrieve values
    let now = input > 0 ? new Date(input * 1000) : new Date();
    let inputDate = timezone_offset > 0 ? new Date(now.getTime() + now.getTimezoneOffset() * 60000 + (timezone_offset * 1000)) : now;
    let date = inputDate.getDate();
    let dateNum = inputDate.getDate() < 10 ? "0" + inputDate.getDate() : inputDate.getDate();
    let monthFull = monthList[inputDate.getMonth()];
    let month = inputDate.getMonth() + 1;
    let monthNum = month < 10 ? "0" + month : month;
    let year = inputDate.getFullYear();
    let weekday = weekdayList[inputDate.getDay()];
    let hours = inputDate.getHours();
    let hoursNum = hours < 10 ? "0" + hours : hours;
    let minutes = inputDate.getMinutes();
    let minutesNum = minutes < 10 ? "0" + minutes : minutes;
    let seconds = inputDate.getSeconds();
    let secondsNum = seconds < 10 ? "0" + seconds : seconds;
    let hoursAPM = hours < 12 ? hours : hours - 12;
    let APM = hours < 12 ? "am" : "pm";

    // Output Formats
    let outputFormat = {
        "timestamp": Math.floor(now), // 1600939836988
        "full_date": `${date} ${monthFull} ${year}`, // 1 September 2020
        "full_date_DD": `${dateNum} ${monthFull} ${year}`, // 01 September 2020
        "full_date_weekday": `${date} ${monthFull} ${year}, ${weekday}`, // 1 September 2020, Sunday
        "full_date_DD_weekday": `${dateNum} ${monthFull} ${year}, ${weekday}`, // 01 September 2020, Sunday
        "month_year": `${monthFull} ${year}`, // September 2020
        "weekday": weekday, // Sunday
        "YYYY": year,// 2020
        "M": month, // 9
        "MM": monthNum, // 09
        "D": date, // 1
        "DD": dateNum, // 01
        // Date without seperation
        "YYYYMM": `${year}${seperator}${monthNum}`, // 202009
        "YYYYMMDD": `${year}${seperator}${monthNum}${seperator}${dateNum}`, // 20200901
        "MMDD": `${monthNum}${seperator}${dateNum}`, // 0901
        "MMYYYY": `${monthNum}${seperator}${year}`, // 092020
        "DDMMYYYY": `${dateNum}${seperator}${monthNum}${seperator}${year}`, // 01092020
        "DDMM": `${dateNum}${seperator}${monthNum}`, // 0109
        "YYYYM": `${year}${seperator}${month}`, // 20209
        "YYYYMD": `${year}${seperator}${month}${seperator}${date}`, // 202091
        "MD": `${month}${seperator}${date}`, // 91
        "MYYYY": `${month}${seperator}${year}`, // 92020
        "DMYYYY": `${date}${seperator}${month}${seperator}${year}`, // 192020
        "DM": `${date}${seperator}${month}`, // 19
        // Time
        "H": hours, // 5
        "M": minutes, // 7
        "S": seconds, // 9
        "HH": hoursNum, // 05
        "MM": minutesNum, // 07
        "SS": secondsNum, // 09
        "HM": `${hours}${minutes}`, // 57
        "HMS": `${hours}${minutes}${seconds}`, // 579
        "HHMM": `${hoursNum}${seperator}${minutesNum}`, // 0507
        "HHMMSS": `${hoursNum}${seperator}${minutesNum}${seperator}${secondsNum}`, // 050709
        "HH:MM": `${hoursNum}:${minutesNum}`, // 05:07
        "HH:MM:SS": `${hoursNum}:${minutesNum}:${secondsNum}`, // 05:07:09
        "H:MM_APM": `${hoursAPM}:${minutesNum}${APM}`, // 5:07am
        "H:MM:SS_APM": `${hoursAPM}:${minutesNum}:${secondsNum}${APM}`, // 5:07:09am
        "H_APM": `${hoursAPM}${APM}`, // 5am
        "APM": APM, // am
    };

    // if output is not on the list, return false
    if (!outputFormat.hasOwnProperty(output)) return false;
    
    // Declare result
    let result = outputFormat[output];

    //return result;
    return typeof result === "number" ? result.toString() : result;
};

export default g2DateFormat;