import { Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
    {
        path:"create",component:CreateBookComponent
    },
    {
        path:"details/:bookid",component:BookDetailsComponent
    },
    {
        path:"list",component:BookListComponent
    },
    {
        path:"update/:bookid",component:UpdateBookComponent
    },
    {
        path:"home",component:HomeComponent
    },
    {
        path:"books",component:BooksComponent
    }
];



