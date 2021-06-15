import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from 'src/app/interface';
import { Types } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class HttpCardsService {
  
routeAPI = 'http://localhost:3000/cards';
typesAPI = 'http://localhost:3000/Types';
  constructor(private http: HttpClient) {}
   getCards():Promise<any>{
    return this.http.get(this.routeAPI).toPromise();
  }
  postCard(data: Note){   
    // console.log(data)    
    return this.http.post(this.routeAPI, data).toPromise();
  }
  deleteCard(index: number){
    return this.http.delete(this.routeAPI+`/${index}`).toPromise();
  }
  editCard(note:Note){
    return this.http.put(this.routeAPI +`/${note.id}`, note).toPromise();
  }
  getTypes():Promise<any>
  {
    return this.http.get(this.typesAPI).toPromise();
  }
  deleteType(id:number){
    return this.http.delete(this.typesAPI+`/${id}`).toPromise();
  }
  postType(type: Types){
    console.log(type)
    return this.http.post(this.typesAPI, type).toPromise();
  }
}
