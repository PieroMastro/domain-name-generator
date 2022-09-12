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
    //for loop "pronoun"
    for (let j = 0; j < adj.length; j++) {
      //for loop "adj"
      for (let k = 0; k < noun.length; k++) {
        //for loop "noun"
        for (let l = 0; l < domain.length; l++) {
          //for loop "domain"

          console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
          //this will print "i", "j", "k", "l" sequentially until every possible combination is done (for loop = false)
        }
      }
    }
  }
}
