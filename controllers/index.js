import { getAllPracticesDaysInOneMonth } from "../utils/getAllPracticesDaysInOneMonth.js";
import { matchDaysNumbers } from "../utils/matchDaysNumbers.js";

const handlTaskController = (req, res)=>{
   const {sessions, date} = req.body
    const numberOfChapters= [...Array(30).keys()] 
    const sessionsInput=  [...Array(+sessions).keys()] ;
    let practiceDayesInputs = [2,6].sort();
    // const date="2021-12-19"
    const DECEMBER = 12;
    let arrayDate = date.split('-')  
    let [year, month,startDay] = arrayDate
        year  = +year
        month = +month
        startDay   = +startDay
    let schedule = {}
    let plainEnglishDayAndCode = [];
    let allPracticeDayesInSingleMonth = []

  practiceDayesInputs.forEach(day=>{
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
           
          }      
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
                      
                   allPracticeDayesInSingleMonth=getAllPracticesDaysInOneMonth(plainEnglishDayAndCode,month,year)
  
                }
        })
    })
    res.json({youSchedulePracticeDayes:schedule})
}




const displayDataController =(req, res)=>{
    res.json('<h1>data</h1>')
}
export {handlTaskController,displayDataController}
