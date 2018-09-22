import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions:Question[];

  constructor() { 
    /*
    this.questions = [
      {
        text: 'what is your name',
        answer: 'zuber',
        hide: true
      },
      {
        text: 'what is fov color',
        answer: 'red',
        hide: true
      },
      {
        text: 'what is fov lang',
        answer: 'chinese',
        hide: true
      }
    ];
    */
   }

   // Get Questions from LS
   getQuestions() {
     if (localStorage.getItem('questions') === null) {
        this.questions = [];
     } else {
       this.questions = JSON.parse(localStorage.getItem('questions'));
     }
     return this.questions;
   }

   // Add Question to LS
   addQuestion(question:Question) {
     this.questions.unshift(question);
        
      // Init local var
      let questions;

      if (localStorage.getItem('questions') === null) {
        questions = [];
        // push new question
        questions.unshift(question);
        // Set new Array to LS
        localStorage.setItem('questions', JSON.stringify(questions));
     } else {
       questions = JSON.parse(localStorage.getItem('questions'));
       //Add new Question
       questions.unshift(question);
       // Re Set LS
       localStorage.setItem('questions', JSON.stringify(questions));
     }
      
   }
  
   // Remove Question from Ls
   removeQuestion(question:Question) {
      for (let i = 0; i < this.questions.length; i++) {
        if (question == this.questions[i]) {
          this.questions.splice(i, 1);
          localStorage.setItem('questions', JSON.stringify(this.questions));
        }
      }
   }
}
