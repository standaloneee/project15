import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../interface';
import { Types } from '../types';


@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
@Output() noteAdd = new EventEmitter<Note>();
@Output() typeAdd = new EventEmitter<Types>();
@Input() types!: Types;
article: string = ''; 
maintext: string = '';
idnumber: number = 1;
cardForm!: FormGroup;
typesForm!: FormGroup;
typename: string = "";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {  
    const controls = {
      name:[null, [Validators.required]],
      maintext: [null, [Validators.required]],
      date: new Date,
      // type: [null, [Validators.required]]
      type: [null]      
    }
    const types = {
      name: [null, [Validators.required]]
    }
    this.cardForm = this.fb.group(controls);
    this.typesForm = this.fb.group(types);
  }
  async onAddNote(){
    const card = this.cardForm.value;
    this.article='';
    this.maintext='';      
    this.cardForm.controls['date'].setValue(new Date);
    this.cardForm.controls['name'].setValue(this.article);
    this.cardForm.controls['maintext'].setValue(this.maintext); 
    let typeid = this.typesForm.controls['name'].value;
    this.cardForm.controls['type'].setValue('typeid');   
    this.noteAdd.emit(card);
  }

  async onAddType(){
    // let newNote: { id: number, name: string};
    // newNote = { id: 1, name: this.typename_};
    // this.types.name = 'test';
    // this.types.id = 1;
    // console.log(this.types)
// this.types.push(newNote);

    // const type_ = this.typesForm.value;
    // this.types.name = this.typesForm.types["name"].value;
    // this.noteAdd.emit(type_)
    // console.log(this.types)
  }

}
