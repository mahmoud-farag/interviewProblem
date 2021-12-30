// import axios from "axios";

/* eslint-disable no-undef */
const selectHtml =document.getElementById('select');
const dateHtml =document.getElementById('date');
const sessionsHtml =document.getElementById('sessions');
const selectDays__Btn =document.getElementById('selectDays__Btn');
const submit__btn =document.getElementById('submit__btn');
let  options; 
const daysInputs = []
let dateInput ;
let sessionsInput;


dateHtml.addEventListener('input',async(event)=>{
    dateInput = event.target.value
})

sessionsHtml.addEventListener('input',async(event)=>{
 sessionsInput = event.target.value; 
//  console.log(event.target.value)
})

selectHtml.addEventListener('click',async(event)=>{
  await event.target.classList.toggle('selected') 
})

selectDays__Btn.addEventListener('click', ()=>{
    options= document.querySelectorAll('.selected');
    options.forEach((option)=>{
        daysInputs.push(option.value)
    })

})

submit__btn.addEventListener('click',async()=>{
            const dataObject = {date:dateInput,sessions:sessionsInput, practiceDayes :daysInputs}
        // const {data} = await axios.post('localhost:4000/api/handltask', dataObject)
        const rawResponse = await fetch('http://localhost:4000/api/handltask', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataObject)
             });
            const content = await rawResponse.json();
          window.location.href(content)
             console.log(content);
 })