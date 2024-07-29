import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  baseUrl="http://localhost:8080/books";
 

  constructor(private http:HttpClient) { }

  insertBooks(book:Book):Observable<Book>{
    return this.http.post<Book>(`${this.baseUrl}`+"/insert",book);
  }
  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}`+"/retrieveBooks");
  }
  deleteBook(bookid:number):Observable<Book>{
    return this.http.delete<Book>(`${this.baseUrl}/delete/${bookid}`);
  }
  getBook(bookid:number):Observable<Book>{
    console.log("value of bookid "+bookid);
    return this.http.get<Book>(`${this.baseUrl}/retrieveByBook/${bookid}`);
  }
  updateBook(bookid:number,bookobj:Book):Observable<Object>
  {
    console.log("value for updated object is "+bookobj.bookprice);
    return this.http.put<Book>(`${this.baseUrl}`+"/updateBook/"+`${bookid}`,bookobj)
  }
  

}
