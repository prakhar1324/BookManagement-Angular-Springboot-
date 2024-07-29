import { Component } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NgFor],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books!:Book[];
  constructor(private bookservice:BookServiceService,private router: Router){

  }

  ngOnInit(){                                                                                                                          //by default value
    this.reloadData();
  }
  reloadData(){
    this.bookservice.getBooks().subscribe(bookarr=>{
      this.books=bookarr;
    })
  }
  getbook(bookid:number):void{
    console.log("value of book id is "+bookid);
    
    this.bookservice.getBook(bookid).subscribe(b=>{
      this.router.navigate(["/details",bookid]);
    })
  }
}
