import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from 'src/app/interface';

@Injectable({
  providedIn: 'root'
})
export class HttpCardsService {
  
routeAPI = 'http://localhost:3000/cards';
cardsAPI = 'http://localhost:3000/Types';
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
    return this.http.get(this.cardsAPI).toPromise();
  }
}
