/* eslint-disable */
import "bootstrap";
import "./style.css";

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suit = ["&diams;", "&spades;", "&hearts;", "&clubs;"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(generateRandomSuit());
  setInterval(() => {
    let number = generateRandomNumber();
    console.log(number);

    let suit = generateRandomSuit();
    console.log(suit);

    let spanNumber = document.querySelector(".number");
    spanNumber.innerHTML = number;

    let spanTopSuit = document.querySelector(".top-suit");
    spanTopSuit.innerHTML = suit;

    let spanbottonSuit = document.querySelector(".botton-suit");
    spanbottonSuit.innerHTML = suit;

    if (suit == "&diams;" || suit == "&hearts;") {
      spanTopSuit.style.color = "red";
      spanbottonSuit.style.color = "red";
    } else {
      spanTopSuit.style.color = "black";
      spanbottonSuit.style.color = "black";
    }
  }, 1000); // 1 second
};
