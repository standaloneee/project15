import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../interface';
import { HttpCardsService } from '../shared/services/http-cards.service';
import { Types } from '../types';


@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  @Output() noteAdd = new EventEmitter<Note>();
  @Output() typeAdd = new EventEmitter<Types>();
  @Output() deleteType = new EventEmitter<number>();
  @Input() types: Types | any;
  article: string = '';
  maintext: string = '';
  cardForm!: FormGroup;
  typesForm!: FormGroup;
  expression: boolean = true;

  constructor(private fb: FormBuilder, private HttpCardsService: HttpCardsService) { }

  ngOnInit(): void {

    const controls = {
      name: [null, [Validators.required]],
      maintext: [null, [Validators.required]],
      date: new Date,
      type: [null, [Validators.required]]
      // type: [null]      
    }
    const types = {
      name: [null, [Validators.required]]
    }
    this.cardForm = this.fb.group(controls);
    this.typesForm = this.fb.group(types);
    // this.getTypes();
  }
  onAddNote() {
    this.cardForm.controls['date'].setValue(new Date);
    const card = this.cardForm.value;
    this.noteAdd.emit(card);
    this.cardForm.reset();
  }
  onAddType() {
const type = this.typesForm.value;
this.typeAdd.emit(type);
  }
  onChangeExpression() {
    this.expression = !this.expression;
  }
  onDeleteType(index: number) {
    console.log(index)
    this.deleteType.emit(index);
  }
}
