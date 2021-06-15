import { Component, Input, OnInit } from '@angular/core';
import { Note } from './interface';
import { Types } from './types';
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
  types!: Types[];
  // idnumber = 1;
  
async onDeleteType(index: number){
try {
  await this.HttpCardsService.deleteType(index);
} catch (error) {
  console.error(error)
}
this.getTypes();
}
  async onAddNote(notes: Note) {       
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
  async onAddType(type: Types){
    try {
      await this.HttpCardsService.postType(type);
    } catch (error) {
      
    }
    this.getTypes();
  }
  async onEditNote(note: Note){
     try {
      await this.HttpCardsService.editCard(note);
    } catch (err) {
      console.log(err);
    }    
  }
  ngOnInit() {     
    this.getData();
    this.getTypes();    
  }
  async getTypes(){
    try {
      this.types = await this.HttpCardsService.getTypes();
    } catch (error) {
      
    }
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
