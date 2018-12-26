const greetingForm = document.querySelector(".js-form"),
  input = greetingForm.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    // 디폴트를 무시한다.
    event.preventDefault();
    // 일단 새로운 input을 currentValue에 저장한다.
    const currentValue = input.value;
    //paintgretting 에 curent value를 주자
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    greetingForm.classList.add(SHOWING_CN);
    greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    greetingForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser)
    }
}

function init(){
    loadName();
}

init();