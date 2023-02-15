import { Component,Input,OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit  {
  gameLevel='';
  hard="0-1000";
  medium="0-100";
  easy="0-10";
  left: number=5;
  tried:number[]=[];
  randomEasy=Math.floor(Math.random()*10)+1;
  randomMedium=Math.floor(Math.random()*100)+1;
  randomHard=Math.floor(Math.random()*1000)+1;
  
  constructor(private route: ActivatedRoute) {  }
  
  whichLevel(){
    if(this.gameLevel=="Easy"){
      return this.easy;
    }
    else if(this.gameLevel=="Medium"){
      return this.medium;
    }
    else{
      return this.hard;
    }
  }
  
  play(){
    let myInput=document.getElementById("numberInput") as HTMLInputElement;
    let inputValue=myInput.value;
    let parsedValue=parseInt(inputValue);
    let comment=document.getElementById("comment") as HTMLParagraphElement;
    this.left--;
    this.tried.push(parsedValue);
    let triedString=this.tried.join(", ");
    let numbersTriedElement=document.getElementById("numbersTried") as HTMLParagraphElement;;
    numbersTriedElement.innerHTML=`Numbers you tried: ${triedString}`;
    
    if(this.left==0){
      comment.innerHTML="OUT OF TRIES";
      document.getElementById("submit")?.setAttribute("disabled", "disabled");
      document.getElementById("numberInput")?.setAttribute("disabled", "disabled");
    }
    else{
      if(this.gameLevel=="Easy"){
        if(parsedValue>10 || parsedValue<0){
          comment.innerHTML="OUT OF RANGE";
        }
        else if(parsedValue<this.randomEasy){
          comment.innerHTML="YOUR GUESS IS LOWER";
        }
        else if (parsedValue>this.randomEasy){
          comment.innerHTML="YOUR GUESS IS HIGHER";
        }
        else if(inputValue==""){
          comment.innerHTML="ENTER VALUE PLEASE";
        }
        else {
          comment.innerHTML="CORRECT! END OF THE GAME!";
          document.getElementById("submit")?.setAttribute("disabled", "disabled");
          document.getElementById("numberInput")?.setAttribute("disabled", "disabled");
        }
      }
      else if(this.gameLevel=="Medium"){
        if(parsedValue>100 || parsedValue<0){
          comment.innerHTML="OUT OF RANGE";
        }
        else if(parsedValue<this.randomMedium){
          comment.innerHTML="YOUR GUESS IS LOWER";
        }
        else if (parsedValue>this.randomMedium){
          comment.innerHTML="YOUR GUESS IS HIGHER";
        }
        else if(inputValue==""){
          comment.innerHTML="ENTER VALUE PLEASE";
        }
        else {
          comment.innerHTML="CORRECT! END OF THE GAME!";
          document.getElementById("submit")?.setAttribute("disabled", "disabled");
          document.getElementById("numberInput")?.setAttribute("disabled", "disabled");
        }
      }
      else{
        if(parsedValue>1000 || parsedValue<0){
          comment.innerHTML="OUT OF RANGE";
        }
        else if(parsedValue<this.randomHard){
          comment.innerHTML="YOUR GUESS IS LOWER";
        }
        else if (parsedValue>this.randomHard){
          comment.innerHTML="YOUR GUESS IS HIGHER";
        }
        else if(inputValue==""){
          comment.innerHTML="ENTER VALUE PLEASE";
        }
        else {
          comment.innerHTML="CORRECT! END OF THE GAME!";
          document.getElementById("submit")?.setAttribute("disabled", "disabled");
          document.getElementById("numberInput")?.setAttribute("disabled", "disabled");
        }
      }
  }
    myInput.value='';
  }

  ngOnInit():void {
    this.route.paramMap.subscribe((params:any) => {
      this.gameLevel = params.get('gameLevel');
    });
  }
}
