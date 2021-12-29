const matchDaysNumbers =(day)=>{

    switch(day){
        case 1: 
            return  {plainEnglishDay:'Sat', code:'/02/'};
        case 2:
            return {plainEnglishDay:'Sun', code:'/01/'};
        case 3: 
            return {plainEnglishDay:'Mon', code:'/07/'};
        case 4: 
            return {plainEnglishDay:'Tue', code:'/06/'};
        case 5:
            return {plainEnglishDay:'Wed', code:'/05/'};
        case 6: 
            return {plainEnglishDay:'Thu', code:    '/04/'};
        case 7: 
            return {plainEnglishDay:'Fri', code:'/03/'};
        default:
            return {plainEnglishDay:'Fri', code:'/03/'}
    }
}
export {matchDaysNumbers}