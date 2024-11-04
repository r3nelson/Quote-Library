// Example data for Quotes, Authors, and Topics

const quotes = [
  {
    id: "1",
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    rating: 5,
    author: "Franklin D. Roosevelt",
    topic: "Motivation",
    sourceMaterial: "Speech at the White House",
    additionalInfo: "Delivered during a critical period in American history.",
  },
  {
    id: "2",
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    rating: 4,
    author: "Martin Luther King Jr.",
    topic: "Justice",
    sourceMaterial: "Letter from Birmingham Jail",
    additionalInfo: "Written during the Civil Rights Movement.",
  },
  {
    id: "3",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    rating: 5,
    author: "Winston Churchill",
    topic: "Perseverance",
    sourceMaterial: "Speech to the House of Commons",
    additionalInfo: "Given during WWII, emphasizing resilience.",
  },
];

const authors = [
  {
    id: "A1",
    name: "Franklin D. Roosevelt",
    quotes: [quotes[0]],
  },
  {
    id: "A2",
    name: "Martin Luther King Jr.",
    quotes: [quotes[1]],
  },
  {
    id: "A3",
    name: "Winston Churchill",
    quotes: [quotes[2]],
  },
];

const topics = [
  {
    id: "T1",
    name: "Motivation",
    quotes: [quotes[0]],
  },
  {
    id: "T2",
    name: "Justice",
    quotes: [quotes[1]],
  },
  {
    id: "T3",
    name: "Perseverance",
    quotes: [quotes[2]],
  },
];

export default { quotes, authors, topics };
