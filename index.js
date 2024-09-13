//add on click event listeners to all tags with class port

function attachPortListeners(){
    let ports = document.getElementsByClassName("trade-port");
    ports.forEach((port) => port.addEventListener("click", assignPort))
}

function assignPort(event){
    console.log(event.target.value);
}
/*
  when event is triggered:
   if origin is nil
   assign event value to origin
   if origin is non-nil
   assign event value to destination
*/

/*
  if origin and destination are set add the "set sail" element
  element should have an event listener that when triggered should
  call an async travel function; travel function should take an integer value for travel time;
  travel time value will be stored in an object of objects holding all the times between all ports
  travel function should update Dom element to track eta
*/

attachPortListeners()
