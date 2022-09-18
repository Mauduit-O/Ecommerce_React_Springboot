package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.ProductM;

public interface ProductRepository extends JpaRepository<ProductM, Long>{

}
