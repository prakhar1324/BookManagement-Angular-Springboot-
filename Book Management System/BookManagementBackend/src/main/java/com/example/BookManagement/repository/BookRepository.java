package com.example.BookManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.BookManagement.model.Book;
public interface BookRepository extends JpaRepository<Book, Integer> {
	
}
