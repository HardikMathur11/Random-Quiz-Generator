

const  arr = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "Who was the first President of India?",
    options: ["Rajendra Prasad", "Jawaharlal Nehru", "APJ Abdul Kalam", "Sarvepalli Radhakrishnan"],
    answer: "Rajendra Prasad"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra"
  },
  {
    question: "In which year did India gain independence?",
    options: ["1945", "1946", "1947", "1950"],
    answer: "1947"
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen"
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile"
  },
  {
    question: "Who wrote the national anthem of India?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhas Chandra Bose"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    answer: "Japan"
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Hippopotamus", "Giraffe"],
    answer: "Blue Whale"
  },
  {
    question: "Which is the smallest continent by land area?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    answer: "Australia"
  }
];



const  button = document.querySelector("button");   
button.addEventListener("click", () => {    
    const get =  arr[Math.floor(Math.random() * arr.length)];
   const res = document.getElementById("result");
   res.innerHTML = get.question + "<br>" + "<br>" ;

   

});

console.log(arr);
const optionsContainer = document.getElementById("options");

console.log(optionsContainer);
console.log("Hello");

//I am fixing some bugs
console.log("This is a bug in the code");
//lets fix the bug
console.log("Bug fixed");