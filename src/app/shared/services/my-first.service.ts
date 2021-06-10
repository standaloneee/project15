import { Injectable } from '@angular/core';
import { Note } from 'src/app/interface';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {
myNotes: Note[] = [];
  constructor() { }
  // MySuperFunction(p: any){
  //   console.log(p);
  // }
}
