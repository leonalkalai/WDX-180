---
title: BUG JOURNAL
---

## BUG CATEGORIES

  - Browser behaviour

## 12/12/2023 - Week 10 - Day 02

  **Description:**

  During one of the exercises, I have created a ahref link element right before the end of the body.
  When i hovered over that element from the bottom, the browser (chrome) preview link was displayed at the lower right.
  When i hovered over that element from the top, the browser (chrome) preview link was displayed just below the link as it should. 


  **Code:**

  ```js
// Create a link for the WDX-180 page

  let link = document.createElement('a');
  let pageTitle = document.title; 
  link.setAttribute('href',document.location.href);
  link.setAttribute('target',"_blank");
  link.innerHTML = pageTitle;


  //Quick fix
  
  document.body.appendChild(link);  // <= instead of placing the link before the end of body


  let suggestions = document.querySelector(`h2[id="week-10---weekend-suggestions"]`); // <= I placed it somewhere else (suggestions div)
  suggestions.appendChild(link);

  
  ```



