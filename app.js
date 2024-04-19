let selecaoDbet = document.querySelectorAll('.drum').length


 for(let i = 0 ;i < selecaoDbet; i++){

     document.querySelectorAll('button')[i].addEventListener('click', function(){
      
      let buttonInnerHTML = this.innerHTML

     makeSounds(buttonInnerHTML)
       
     buttoAnimation(buttonInnerHTML)

 })

}  

document.addEventListener('keydown', function(event){
   makeSounds(event.key)
     buttoAnimation(event.key)

   })

function makeSounds(key){

   switch (key) {

      case 'w':
         let tom1 = new Audio('./sounds/tom-1.mp3');
         tom1.play();
      break;

      case 'a':
         let tom2 = new Audio('./sounds/tom-2.mp3');
         tom2.play();
       break;

      case 's':
         let tom3 = new Audio('./sounds/tom-3.mp3');
         tom3.play();
      break;

      case 'd':
         let tom4 = new Audio('./sounds/tom-4.mp3');
         tom4.play();
      break;

      case 'j':
         let snare = new Audio('./sounds/snare.mp3');
         snare.play();
      break;

      case 'k':
         let crash = new Audio('./sounds/crash.mp3');
         crash.play();
      break;

      case 'l':
          let kick = new Audio('./sounds/kick-bass.mp3');
          kick.play();
      break;
    
      default: console.log(buttonInnerHTML)
        break;
    }    

}

function buttoAnimation(event){
    let acctiverButton = document.querySelector('.' + event)

    acctiverButton.classList.add('pressed')

    setTimeout( function(){

      acctiverButton.classList.remove('pressed')
    },200)
       
         
      }
    







/*let btns = document.getElementsByClassName("drum")

let sounds = [
  'tom-1.mp3',
  'tom-2.mp3',
  'tom-3.mp3',
  'tom-4.mp3',
  'snare.mp3',
  'crash.mp3',
  'kick-bass.mp3',
];
for (let i = 0; i < btns.length; i++) {

  btns[i].addEventListener("click", function () {

    let audio = new Audio("sounds/" + sounds[i]);
    audio.play();

    this.style.color = 'red';
  });
}*/





/* let audio = new Audio('./sounds/tom-1.mp3');
audio.play();*/
