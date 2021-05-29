// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//global variables 
let hideError = document.querySelector('#modal')
hideError.className = 'hidden'
let likeBtn = document.querySelectorAll('.like span')
//event listeners
likeBtn.forEach(span => span.addEventListener('click', e => likeClick(e)))
//functions

function likeClick(e){
  let likeValue = e.target
mimicServerCall('http://mimicServer.example.com', config = {})
.then(success => updateLike(success))
.catch(error => errorMsg(error))

function updateLike(success){
  console.log(success)
  if (likeValue.textContent === EMPTY_HEART){
    likeValue.className = 'activated-heart'
    likeValue.textContent = FULL_HEART

  }else if (likeValue.textContent === FULL_HEART){
  likeValue.className = ''
  likeValue.textContent = EMPTY_HEART
  }
}
function errorMsg(error){
  console.log(error)
  hideError.className=''
  setTimeout(()=>hideError.className='hidden', 3000)

}

}




















//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
