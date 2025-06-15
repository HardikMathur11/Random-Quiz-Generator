

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

function RandomQuestion(questionBank){
    
    const arr = [];
    let i = 0;
    let length = questionBank.length;
    while(i<5)
    {
      const index = Math.floor(Math.random()*length);
      arr.push(questionBank[index]);
      [questionBank[index],questionBank[length-1]] = [questionBank[length-1],questionBank[index]];
      length--,i++;
    }

    return arr;
}
const randomQuestions = RandomQuestion(arr);
const  button = document.querySelector("button"); 
  const container = document.getElementById("container");
randomQuestions.forEach(({question, options , answer} , idx) => {
  const  q = document.createElement("h3");
  q.textContent = `${idx+1 }` + ". " + question;

  const q1 = document.createElement("div");
  q1.appendChild(q);
 
  // inp.type = "radio";
  // inp.name = question;
  // inp.value

  options.forEach((options) => {
      const opt = document.createElement("input");
      opt.textContent = options;
      opt.type = "radio";
      opt.name = question;
      opt.value = options; 

      const label = document.createElement("label");
    label.appendChild(opt);
    label.appendChild(document.createTextNode(options));

    q1.appendChild(label);
    q1.appendChild(document.createElement("br"));
      
  })
  container.appendChild(q1);
}
);
  //Now checking the result
  button.addEventListener("click", () => {
    let score = 0;
    arr.forEach(({question, answer}) => {
      const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
      if (selectedOption && selectedOption.value === answer) {
        score++;
      }
    });
    const resuly = document.getElementById("result"); 
    resuly.textContent = "Your score is: " + score + "/" + arr.length;
   
    //now stop event listner 
    
     // Disable the button
  button.disabled = true;

  // Disable all radio inputs
  document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.disabled = true;
  });

});


// button.addEventListener("click", () => {    
//     const get =  arr[Math.floor(Math.random() * arr.length)];
//    const res = document.getElementById("result");
//    res.innerHTML = get.question + "<br>" + "<br>" ;

   

// });



