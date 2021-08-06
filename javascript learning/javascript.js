// function toggle(){
//   let button = document.getElementById('plain');
//   if(button.offsetWidth > 0 || button.offsetHeight < 0){
//     button.style.display = 'none';
//     console.log('if');
//   } else{
//     button.style.display = 'block';
//     console.log('else');
//   }
// }
setInterval(showTime,500);
function showTime(){
  let datetime = new Date();
  let hour = datetime.getHours();
  let minutes = datetime.getMinutes();
  let seconds = datetime.getSeconds();
  let ampm = "AM";

  if(hour > 12){
    hour -= 12;
    ampm = "PM";
  }
  if(hour == 0 ){
    hour = 12;
    ampm = "AM"
  }
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let formattedTime = 0;
  formattedTime = hour + ":" + minutes + ":" + seconds + ampm;

  document.getElementById("clock").innerHTML = formattedTime;
}

showTime();