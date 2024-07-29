import { Component } from '@angular/core';
import { Book } from '../book';
import { FormsModule } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent {
  bookobj=new Book();
  constructor(private bookservice:BookServiceService,private router:Router){
  }

  addBook(){
    console.log(this.bookobj);  
    this.bookservice.insertBooks(this.bookobj).subscribe(book=>{
      console.log("data inserted "+book.booktitle)
      this.router.navigate(["/list"]);
      
    });
  }
}
