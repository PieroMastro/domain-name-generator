/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "one", "my"];
  let adj = [
    "great",
    "big",
    "last",
    "final",
    "good",
    "first",
    "last",
    "long",
    "great",
    "little"
  ];
  let noun = [
    "jogger",
    "racoon",
    "time",
    "person",
    "year",
    "child",
    "world",
    "computer",
    "park",
    "circle",
    "bicycle"
  ];
  let domain = [
    ".us",
    ".net",
    ".com",
    ".ve",
    ".io",
    ".mx",
    ".co",
    ".gov",
    ".godaddy",
    ".test"
  ];

  getDomain(pronoun, adj, noun, domain);
};

function getDomain(pronoun, adj, noun, domain) {
  for (let i = 0; i < pronoun.length; i++) {
    //for "pronoun"
    for (let j = 0; j < adj.length; j++) {
      //for "adj"
      for (let k = 0; k < noun.length; k++) {
        //for "noun"
        for (let v = 0; v < domain.length; v++) {
          //for "domain"

          console.log(pronoun[i] + adj[j] + noun[k] + domain[v]);
          //this will print "i", "j", "k", "x" sequentially untill every possible combination is done
        }
      }
    }
  }
}
