import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books!:Book[];
  constructor(private bookservice:BookServiceService,private router:Router,private arouter:ActivatedRoute){

  }

  ngOnInit(){
    this.reloadData();
  }
  reloadData(){
    this.bookservice.getBooks().subscribe(bookarr=>{
      console.log();
      
      this.books=bookarr;
    })
  }
  deleteBook(bookid:number){
    this.bookservice.deleteBook(bookid).subscribe(d=>{
      console.log("deleted!!");
      this.reloadData();
      
    });
    
  }

  getbook(bookid:number):void{
    console.log("value of book id is "+bookid);
    
    this.bookservice.getBook(bookid).subscribe(b=>{
      this.router.navigate(["/details",bookid]);
    })
  }
  
  updateBook(bookid:number):void{
    this.router.navigate([`/update/${bookid}`]);

  }

}
