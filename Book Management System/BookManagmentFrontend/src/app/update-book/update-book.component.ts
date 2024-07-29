import { Component } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  id!:number;
  book:Book=new Book();

  constructor(private bookservice: BookServiceService,private route:ActivatedRoute,private router: Router){

  }

  ngOnInit():void{
    this.id=this.route.snapshot.params['bookid'];
    this.bookservice.getBook(this.id).subscribe(b=>{
      this.book=b;
    })
  }
  updateBook()
{
  this.bookservice.updateBook(this.id,this.book).subscribe(updatedbook=>
  {
    console.log("updated value is "+updatedbook);
    console.log("value coming is "+this.book.bookprice);
    this.goToBookList();
  }
  )
}
goToBookList()
{
  this.router.navigate(['/list']);
}

  
  

}
