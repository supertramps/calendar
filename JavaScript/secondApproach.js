let firstDay = (new Date(year, month)).getDay();

// Calculate number of days within month

daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();

};