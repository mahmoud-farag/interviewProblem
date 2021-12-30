import { getAllPracticesDaysInOneMonth } from "../utils/getAllPracticesDaysInOneMonth.js";
import { matchDaysNumbers } from "../utils/matchDaysNumbers.js";



// /api/handletask/ POST route
const handlTaskController = (req, res)=>{
   
   const {sessions, date,practiceDayes} = req.body
    //  convert array from string numbers to integers numbers
    console.log(practiceDayes)
    practiceDayes.map(((element, index)=>{
        practiceDayes[index] = +element
   }))
    
     //convert you variable into array to be iterable (to be able to use forEach func)
    const numberOfChapters= [...Array(30).keys()] 
    const sessionsInput=  [...Array(+sessions).keys()] ;
    
    const DECEMBER = 12;
     // example  24-12-2021 ==> day=24 month=12 year=2021
    let arrayDate = date.split('-')  
    let [year, month,startDay] = arrayDate
        year  = +year 
        month = +month
        startDay   = +startDay
    
      // holding my response
    let schedule = {}
    // holding the result from  matchDaysNumbers FUNC
    let plainEnglishDayAndCode = [];
    // holding the result from  getAllPracticesDaysInOneMonth FUNC
    let allPracticeDayesInSingleMonth = []

    //  example [1,6] ==> [{plainEnglishDay:'Sat', code:'/02/'}, {plainEnglishDay:'Thu', code:'/04/'}]
    practiceDayes.forEach(day=>{
      let result = matchDaysNumbers(+day)
      plainEnglishDayAndCode.push(result)
    })
      // handling my daynamic session days practing based on the user desired days
    
    numberOfChapters.forEach((chapter,chaperIndex)=>{
      
        // escipe the past days (days before the start day)in the first month  of the practicing 
        if(chaperIndex === 0){
          allPracticeDayesInSingleMonth=getAllPracticesDaysInOneMonth(plainEnglishDayAndCode,month,year);
           let result = allPracticeDayesInSingleMonth.filter(day=> day>startDay)
           allPracticeDayesInSingleMonth = [...result];
           schedule['chapter'+(chaperIndex)] = [`${startDay}-${month}-${year}`];
           
          }      
          // initialize empty array for the new chapter to add upcoming sessions
           if(chaperIndex >0) schedule['chapter'+(chaperIndex)]  = []

           sessionsInput.forEach((session, sessionIndex)=>{    
                // skip fisrt iteration because we add the start day above
              if(chaperIndex === 0 && sessionIndex === 0) return
          
              schedule['chapter'+(chaperIndex)] 
                = [...schedule['chapter'+(chaperIndex)], 
                `${allPracticeDayesInSingleMonth[0]}-${month}-${year}`
                  ]
                //every iteration remove first item
                   allPracticeDayesInSingleMonth.splice(0,1)

                     // find the  required days in the next month 
                    if(allPracticeDayesInSingleMonth.length === 0){
                    //    newMonth =month
                      if(month=== DECEMBER)
                        {
                          month = 1;
                            year +=1
                        }else{
                            month +=1
                        }
                      
                   allPracticeDayesInSingleMonth=getAllPracticesDaysInOneMonth(plainEnglishDayAndCode,month,year)
  
                }
           })
    })


    res.json(schedule)
}

export {handlTaskController}
