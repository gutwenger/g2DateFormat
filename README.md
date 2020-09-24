<div id="header">
    <h1 class="title">
        G2DateFormat
    </h1>
    <p>This library attemps to provide an easier way to retrieve datetime data by manipulating JS date and time.<p>
    <h3 class="text-decoration: underline;">Content:</h3>
    <ul>
        <li>
            <a href="#getting_started">Getting Started</a>
            <ul>
                <li><a href="#install">Install</a></li>
                <li><a href="#usage">Usage</a></li>
            </ul>
        </li>
        <li>
            <a href="#">Output Formats</a>
            <ul>
                <li><a href="#basic_formats">Basic Formats</a></li>
                <li><a href="#date">Date</a></li>
                <li><a href="#time">Time</a></li>
                <li><a href="#time_sep">Time with Seperator</a></li>
            </ul>
        </li>
        <li><a href="#">Input Datetime Value</a></li>
        <li><a href="#">Timezone Offset</a></li>
    </ul>
</div>
<div id="getting_started">
    <h2>Getting Started</h2>
    <p>There are two ways to utilise this library:<p>
</div>


### Install
```
$ npm install g2DateFormat --save
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
let example = g2DateFormat("YYYYMMDD", ".", 0, 0);
```
Expected output:
```
2020.09.01
```

## Output Formats
There are 40 different output formats:
### Basic Formats

|Parameter|Output|
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

|Parameter|Output|
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

|Parameter|Output|
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
|Parameter|Output|
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

