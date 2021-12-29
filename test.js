import { getAllPracticesDaysInOneMonth } from "./utils/getAllPracticesDaysInOneMonth.js";
// import { getTotalDatesForSingleDayInMonth } from "./utils/getTotalDatesForSingleDayInMonth.js";
import { matchDaysNumbers } from "./utils/matchDaysNumbers.js";

// const getDayDatesOnMonth=( m, y , dayCode)=> {
//     var days = new Date( y,m,0 ).getDate();
//     //  /01/=> sunday  /02/=>Saturday /03/=> Friday /04/=> Thursday  /05/=> Wednesday  /06/=>Tuesday /07/=>Monday
//     var sundays = [ 8 - (new Date( m +dayCode+ y ).getDay()) ];
//     for ( var i = sundays[0] + 7; i < days; i += 7 ) {
//       sundays.push( i );
//     }
//     return sundays;
// }


const numberOfChapters= [...Array(10).keys()] 
const sessionsInput=  [...Array(4).keys()] ;
let practiceDayesInputs = [2,6].sort();
const date="2021-12-19"
const DECEMBER = 12;


// let arrayDate = new Date(date).toString().split(' ')
// let [year, month, , day] = arrayDate

let arrayDate = date.split('-')  
let [year, month,startDay] = arrayDate
    year  = +year
    month = +month
    startDay   = +startDay
let schedule = {}
let plainEnglishDayAndCode = [];
let allPracticeDayesInSingleMonth = []

  practiceDayesInputs.forEach(day=>{
     
    // find  the correspond [1,2,3,4,5,6,7] =>['saturday,sunday,monday....] and the code to match dayes in plain english
    // then save it into plainEnglishDayAndCode array 
      let result = matchDaysNumbers(+day)
     plainEnglishDayAndCode.push(result)
  })

  numberOfChapters.forEach((chapter,chaperIndex)=>{
      
      // escepe the past days (days before the start day)in the first month  
      if(chaperIndex === 0){
        allPracticeDayesInSingleMonth=getAllPracticesDaysInOneMonth(plainEnglishDayAndCode,month,year).sort();
         let result = allPracticeDayesInSingleMonth.filter(day=> day>startDay)
         allPracticeDayesInSingleMonth = [...result].sort();
         schedule['chapter'+(chaperIndex)] = [`${startDay}-${month}-${year}`];
         console.log(allPracticeDayesInSingleMonth)    
        }      
        //    //every iteration remove first item
        //    allPracticeDayesInSingleMonth.splice(0,1)
        
        // initialize empty array for the new chapter to add upcoming sessions
         if(chaperIndex >0) schedule['chapter'+(chaperIndex)]  = []
      sessionsInput.forEach((session, sessionIndex)=>{

            // skip fisrt iteration because we add the start day above
          if(chaperIndex === 0 && sessionIndex === 0) return
        //   if(sessionIndex>0) sessionIndex= sessionIndex -1
       
          schedule['chapter'+(chaperIndex)] 
            = [...schedule['chapter'+(chaperIndex)], 
            `${allPracticeDayesInSingleMonth[0]}-${month}-${year}`
              ]
            //every iteration remove first item
            allPracticeDayesInSingleMonth.splice(0,1)
              if(allPracticeDayesInSingleMonth.length === 0){
                //    newMonth =month
                   if(month=== DECEMBER)
                     {
                       month = 1;
                        year +=1
                     }else{
                         month +=1
                     }
                     console.log(month)
                     console.log(year)
                 allPracticeDayesInSingleMonth=getAllPracticesDaysInOneMonth(plainEnglishDayAndCode,month,year)

              }
      })
  })

  console.log(schedule)
// allPracticeDayesInSingleMonth=getAllPracticesDaysInOneMonth(plainEnglishDayAndCode,12,2021);
// console.log(allPracticeDayesInSingleMonth)

  































