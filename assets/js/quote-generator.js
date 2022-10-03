// variables

let btn = document.querySelector('.quote__btn');
let quote = document.querySelector('.quote__speech');
let person = document.querySelector('.quote__person');

const quotes = [
  {
    quote: `"Keep your face always toward the sunshine - and shadows will fall behind you."`,
    person: `Walt Whitman`,
  },
  { quote: `"Every day brings new choices."`, person: `Martha Beck` },

  {
    quote: `"It always seems impossible until it's done."`,
    person: `Nelson Mandela`,
  },
  {
    quote: `"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence."`,
    person: `Helen Keller`,
  },
];

btn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
