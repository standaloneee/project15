import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from './interface';
import { NoteCardComponent } from './note-card/note-card.component';
import { HttpCardsService } from './shared/services/http-cards.service';
import { MyFirstService } from './shared/services/my-first.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(
   private HttpCardsService: HttpCardsService,
   private myFirstService: MyFirstService
 ){

 }
 
  title = 'project11';
  // article = '';
  // maintext = '';
  notes!: Note[];
  // idnumber = 1;
  
  
  async onAddNote(notes: Note) {       
    console.log(notes);
    try {
      await this.HttpCardsService.postCard(notes);            
    } catch (err) {
      console.log(err);
    }
    this.getData();
  }
  async onDeleteNote(index:number) {
   
    console.log(index)
    
    try {
      await this.HttpCardsService.deleteCard(index);
    } catch (err) {
      console.log(err);
      console.log("error");
    }
    this.getData();
  }
  async onEditNote(index: Note){
     try {
      await this.HttpCardsService.editCard(index);
    } catch (err) {
      console.log(err);
    }    
  }
  ngOnInit() {     
    this.getData();
  }
  async getData(){
    try{
      this.notes = await this.HttpCardsService.getCards();
    }
    catch(err){
console.error(err);
    }
  }
}
