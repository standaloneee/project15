import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from '../interface';
import { Types } from '../types';
import { HttpCardsService } from '../shared/services/http-cards.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
 
  @Input() inputNote!: Note;
  @Output() noteDelete = new EventEmitter<number>();
  @Output() noteEdit = new EventEmitter<Note>();
  condition = true;
  cardForm!: FormGroup;
  typesForm!: FormGroup;
  // types!: Types[];


  constructor(private HttpCardsService: HttpCardsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    const controls = {
      name:[null, [Validators.required]],
      maintext: [null, [Validators.required]],
      date: new Date,
      dataChanged: new Date,
      type: [null, [Validators.required]]
    }
    const types = {
      name: [null, [Validators.required]]
    }
    this.cardForm = this.fb.group(controls);
    this.typesForm = this.fb.group(types);
    
  }
  onDeleteNote() {
    this.noteDelete.emit(this.inputNote.id);
  }
  onEditNoteSave(){
    this.inputNote.name = this.cardForm.controls["name"].value;
    this.inputNote.maintext = this.cardForm.controls["maintext"].value;
    this.cardForm.controls["dataChanged"].setValue(new Date);
    console.log(this.cardForm.value)
    // this.inputNote.dataChanged

    if(this.inputNote.name == "" || this.inputNote.maintext == ""){
      
    }
    else{
    this.condition = !this.condition;
    this.noteEdit.emit(this.inputNote)
    }
  }
  onEditNote() {
   this.cardForm.controls["name"].setValue(this.inputNote.name)
   this.cardForm.controls["maintext"].setValue(this.inputNote.maintext)
   this.inputNote.date = new Date;
   
   this.noteEdit.emit(this.inputNote)
   
    if(this.inputNote.name == "" || this.inputNote.maintext == ""){
      
    }
    else{
    this.condition = !this.condition;
    if (this.condition == true)
    {
      console.log("changed")
    
      if(this.inputNote.name == ""){
        console.log("it's empty name")
        this.inputNote.name = "name is empty";
             }
            
             if(this.inputNote.maintext == ""){
        console.log("it's empty maintext")
        this.inputNote.maintext = "maintext is empty";
             }
          }
    }
  }
  
    
    
}
