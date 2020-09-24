# g2DateFormat

This library attemps to provide an easier way to retrieve datetime data by manipulating JS date and time.


## Getting Started
There are two ways to utilise this library:

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

> The first and the second parameters have no default value, the function will return `false` if any of them is left blank.

#### Example
```
let example = g2DateFormat("YYYYMMDD", ".", 0, 0);
```
Expected output:
```
2020.09.01
```

### Output Format
There are 40 different output formats:
* Basic Formats

|Parameter|Output|
| :-:	| :-:	|
|`timestamp`|1598936829|
|`full_date`|1 September 2020|
|`full_date_DD`|01 September 2020|
|`full_date_weekday`|1 September 2020, Sunday|
|`full_date_DD_weekday`|01 September 2020, Sunday|
|`month_year`|September 2020|
|`weekday`|Sunday|
|`YYYY`|2020|
|`M`|9|
|`MM`|09|
|`D`|1|
|`DD`|01|

* Date

|Parameter|Output|
|:-:	|:-:	|
|`YYYYMM`|202009|
|`YYYYMMDD`|20200901|
|`MMDD`|0901|
|`MMYYYY`|092020|
|`DDMMYYYY`|01092020|
|`DDMM`|0109|
|`YYYYM`|20209|
|`YYYYMD`|202091|
|`MD`|91|
|`MYYYY`|92020|
|`DMYYYY`|192020|
|`DM`|19|

* Time

|Parameter|Output|
|:-:	|:-:	|
|``|	|
|``|	|
|``|	|
|``|	|
|``|	|
|``|	|
|``|	|
|``|	|
|``|	|
|``|	|

