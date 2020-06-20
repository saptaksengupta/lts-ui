import moment from 'moment';

const SUPPORTED_FORMATS = {
    'DATE_WITH_DAY_OF_WEEK_SMALL': 'ddd, MMM D',
    'DATE_WITH_DAY_OF_WEEK_SMALL_FULL': 'dddd, MMMM D',
    'DATE_WITH_DAY_OF_WEEK_SMALL_FULL_ORDINAL': 'dddd, MMMM Do',
    'DATE_WITH_DAY_OF_WEEK_SMALL_SMALL_ORDINAL': 'ddd, MMM Do',
    'TIME_IN_TWELVE_HOUR': 'hh:mm A',
    'TIME_IN_TWENTY_FOUR_HOUR': 'HH:mm'
}

const parse = (dateObj, format) => {
    let parsedDate = moment(dateObj);

    if(format) 
        return parsedDate.format(format);
    
    return parsedDate;
}

const parseDate = (date, format = null) => {
    return parse(date, format);
}

const parseTime = (dateTimeStr, format = null) => {
    return parse(dateTimeStr, format);
}


export const DateTimeUtils = {
    parseDate: parseDate,
    parseTime: parseTime,
    SUPPORTED_FORMATS: SUPPORTED_FORMATS
}