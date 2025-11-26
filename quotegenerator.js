const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [{
    quote: "Stand with anybody that stands right, stand with him while he is right and part with him when he goes wrong.",
    person: "Abraham Lincoln"
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    person: "Franklin D. Roosevelt"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    person: "Albert Einstein"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    person: "Ralph Waldo Emerson"
  },
  {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    person: "Dalai Lama"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius"
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt"
  }];

  btn.addEventListener('click',()=>{
    let random = Math.floor(Math.random( )* quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

  })