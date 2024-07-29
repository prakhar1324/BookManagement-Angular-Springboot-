import { Component } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  book!:Book;
  constructor(private router: ActivatedRoute,private bookService: BookServiceService){}

  ngOnInit():void{
    const id = this.router.snapshot.paramMap.get('bookid');                                                           //route parameters
    if (id) {
      this.bookService.getBook(+id).subscribe(book => {
        this.book = book;
      });
    }
  }
}
