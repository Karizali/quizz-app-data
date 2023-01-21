// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, set, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKj6ZVa8eX_9O-cQreqV5igFBN7ASB55A",
  authDomain: "quiz-app-269a5.firebaseapp.com",
  projectId: "quiz-app-269a5",
  storageBucket: "quiz-app-269a5.appspot.com",
  messagingSenderId: "192074109670",
  appId: "1:192074109670:web:7736d205701f10359e2127",
  measurementId: "G-EXSKNPDMW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()




var question = document.getElementById('question')
var option = document.getElementById('option')
var optionsParent = document.getElementById('optionsParent')
var correctAnswerElem = document.getElementById('correctAnswer')
var answerGoesHere = document.getElementById('answerGoesHere')



var options = []
var correctAnswer

function renderOption() {
  optionsParent.innerHTML = ""
  for (var i = 0; i < options.length; i++) {
    optionsParent.innerHTML += `<li onclick="setCorrectAnswer('${options[i]}')" class="w-100 bg-white p-2 shadow fs-5 rounded my-2">${options[i]}</li>`
  }
}

window.addOption = function () {
  options.push(option.value)
  console.log(options)
  renderOption()
}
window.setCorrectAnswer = function (a) {
  correctAnswer = a
  answerGoesHere.innerHTML = correctAnswer
}

window.submitQuestion = function () {
  var obj = {
    question: question.value,
    options: options,
    correctAnswer: correctAnswer
  }

  obj.id = push(ref(db, 'questions/')).key
  const reference = ref(db, `questions/${obj.id}`)  
  set(reference, obj)




  console.log(obj)
}
