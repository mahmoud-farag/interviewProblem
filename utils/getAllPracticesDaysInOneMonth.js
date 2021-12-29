import { getTotalDatesForSingleDayInMonth } from "./getTotalDatesForSingleDayInMonth.js";

const getAllPracticesDaysInOneMonth= (plainEnglishDayAndCode,startMonth,startYear)=>{
  let practiceDayesInSingleMonth = [];
    for (let i=0 ; i < plainEnglishDayAndCode.length ; i++){
        //  return array of  saturdays,sundays,mondays...etc in a specific month 
        let result = getTotalDatesForSingleDayInMonth(startMonth, startYear,plainEnglishDayAndCode[i].code)
        //   join all  desired days in one array
        
        practiceDayesInSingleMonth =[...practiceDayesInSingleMonth,...result];
 }
 return practiceDayesInSingleMonth.sort((a, b) => a - b);
}

export {getAllPracticesDaysInOneMonth};