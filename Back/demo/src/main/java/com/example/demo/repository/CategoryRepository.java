package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.CategoryM;

public interface CategoryRepository extends JpaRepository<CategoryM, Long> {
	

}
