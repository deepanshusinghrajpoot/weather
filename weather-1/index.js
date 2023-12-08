let inputvalue=document.querySelector('#cityinput');
let btn=document.querySelector('#add');
let city=document.querySelector('#cityoutput');
let descrip=document.querySelector('#description');
let temp=document.querySelector('#temp');
let wind=document.querySelector('#wind');
apik="cef8aa0dd04a22bc6ab76d0b9da144e9"
function convertion(val){
    return(val-273).toFixed(3);
}
btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())


    .then(data =>
        {
            let nameval = data['name']
            let descrip = data['weather']['0']['description']
            let tempature = data['main']['temp']
            let wndspeed =data['wind']['temp']


            city.innerHTML=`Weather of <span>${nameval}</span>`
            temp.innerHTML = `Temperature: <span>${convertion(tempature)}C</span>`
            description.innerHTML =` Sky Condition: <span>${descrip}</span>`
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`
        })


        .catch(err => alert('you entered Wrongg city name'))
})