const insert =document.querySelector('.keys');
const button =document.querySelector('.button');

window.addEventListener('keydown',(event) =>{
    button.classList.add('active');
 insert.innerHTML=`
  <div class="warning">
  <h3>You've Pressed ${event.key ===' '? 'Space Bar' : event.key} !<h3>
  </div>
     <div class="key">
        <h2>${event.key ===' '? 'Space Bar' : event.key}</h2>
        <small>event.key</small>

    </div>
    <div class="key">
        <h2>${event.keyCode}</h2>
        <small>event.keyCode</small>
    </div>
    <div class="key">
        <h2>${event.code}</h2>
        <small>event.Code</small>
    </div>

 
 `;
});