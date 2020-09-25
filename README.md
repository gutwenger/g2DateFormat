# g2DateFormat

This library attempts to provide an easier way to retrieve datetime data by manipulating JS date and time.

This library is **easy to use** and **highly customisable**!

Not only can this library help you to acquire current datatime, it can also retrieve specific datetime with timezone offset!


## Getting Started
### Install
```
npm install g2dateformat
```

Then...
```
import g2DateFormat from 'g2DateFormat';

console.log(g2DateFormat("full_date_weekday", '', 0, 0));
```

Expected outcome:
```
1 September 2020, Sunday
```

### Usage
```
g2DateFormat(output_format, seperator, input_datetime_value, timezone_offset);
```

This function has 4 parameters:
* output format
* seperator
* input datetime value (default=0)
* timezone offset (default=0)

> The first and the second parameter have no default value, the function will return `false` if any of them is left blank.

#### Example
```
let current_date = g2DateFormat("YYYYMMDD", ".", 0, 0);
let current_time = g2DateFormat("HHMMSS", ":", 0, 0);
console.log(`Current Date: ${current_date}`);
console.log(`Current Time: ${current_time}`);
```
Expected output:
```
Current Date: 2020.09.25
Current Time: 12:30:33
```

## Data Type of the returned value
Return value:
```
String
```

## Output Formats
There are 40 different output formats:
### Basic Formats

|format|Output|
| :-:	| :-:	|
|`timestamp`|`1598936829`|
|`full_date`|`1 September 2020`|
|`full_date_DD`|`01 September 2020`|
|`full_date_weekday`|`1 September 2020, Sunday`|
|`full_date_DD_weekday`|`01 September 2020, Sunday`|
|`month_year`|`September 2020`|
|`weekday`|`Sunday`|
|`YYYY`|`2020`|
|`M`|`9`|
|`MM`|`09`|
|`D`|`1`|
|`DD`|`01`|

### Date

|format|Output|
|:-:	|:-:	|
|`YYYYMM`|`202009`|
|`YYYYMMDD`|`20200901`|
|`MMDD`|`0901`|
|`MMYYYY`|`092020`|
|`DDMMYYYY`|`01092020`|
|`DDMM`|`0109`|
|`YYYYM`|`20209`|
|`YYYYMD`|`202091`|
|`MD`|`91`|
|`MYYYY`|`92020`|
|`DMYYYY`|`192020`|
|`DM`|`19`|

### Time

|format|Output|
|:-:	|:-:	|
|`H`|`5`|
|`M`|`7`|
|`S`|`9`|
|`HH`|`05`|
|`MM`|`07`|
|`SS`|`09`|
|`HM`|`57`|
|`HMS`|`579`|
|`HHMM`|`0507`|
|`HHMMSS`|`050709`|
|`H_APM`|`5am`|
|`APM`|`am`|

### Time with Sperator
|format|Output|
|:-:	|:-:	|
|`HH:MM`|`05:07`|
|`HH:MM:SS`|`05:07:09`|
|`H:MM:SS_APM`|`5:07:09am`|
|`H:MM_APM`|`5:07am`|

> The `seperator` parameter has no effect to the output. An empty string `""` is expected when you wish to return any of the above output format.

> That means no matter what you pass into the `seperator` parameter, the output will always be the format stipulated by the `output_format` parameter.

#### Example
**Recommended:**
```
let example = g2DateFormat("HH:MM:SS", "", 0, 0);
console.log(example);
```
Expected output:
```
05:07:09
```

**Another example:**
```
let example = g2DateFormat("HH:MM:SS", "-", 0, 0);
console.log(example);
```
Expected output:
```
05:07:09
```


## Input datetime Value
It is the same as creating a new Date object with the new Date() constructor.

There are 4 ways to pass this argument:
```
0 // default value, which will return the current datetime
year, month, day, hours, minutes, seconds, milliseconds
milliseconds
date string
```

Example:
```
g2DateFormat("YYYYMMDD", "-", 0, 0); // 2020-09-01
g2DateFormat("HHMMSS", ":", "2015-01-01 12:05:35", 0); // 12:05:35
g2DateFormat("YYYYMMDD", "-", 1598936829, 0); // 2020-09-01
g2DateFormat("YYYYMMDD", ".", "2000-05-30", 0); // 2000.05.30
```

## Timezone Offset
If you wish to convert the datetime to a specific timezone, you can simply pass the timezone offset (in UNIX format) as the 4th argument.

> This could be left blank and the return value will be the datetime data in your local timezone setting.

### Example
Original Time (GMT+08:00, Timezone Offset in Seconds: +28800):
```
2020-01-01 11:00:00
```

London Time (GMT+01:00, Timezone Offset in Seconds: +3600);
```
g2DateFormat("YYYYMMDD", "-", 1577847600, 3600);
// Output: 2020-01-01

g2DateFormat("HHMMSS", ":", 1577847600, 3600);
// Output: 04:00:00
```

New York Time (GMT-04:00, Timezone Offset in Seconds: -14400);
```
g2DateFormat("YYYYMMDD", "-", 1577847600, -14400);
// Output: 2019-12-31

g2DateFormat("HHMMSS", ":", 1577847600, -14400);
// Output: 23:00:00
```