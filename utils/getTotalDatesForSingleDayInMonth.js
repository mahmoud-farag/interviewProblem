const getTotalDatesForSingleDayInMonth=( m, y , dayCode)=> {
       var days = new Date( y,m,0 ).getDate();
    //  /01/=> sunday
    //  /02/=>Saturday 
    //  /03/=> Friday 
    //  /04/=> Thursday 
    //  /05/=> Wednesday  
    //  /06/=>Tuesday /07/=>Monday
    let dayDates=[];
    (new Date( m +dayCode+ y ).getDay()) === 0 ?    
                 dayDates =[1] : (dayDates =  [8 - (new Date( m +dayCode+ y ).getDay()) ])
        
    for ( var i = dayDates[0] +7; i <= days; i += 7 ) {
        dayDates.push( i );
    }
    return dayDates.sort();
}
export {getTotalDatesForSingleDayInMonth}