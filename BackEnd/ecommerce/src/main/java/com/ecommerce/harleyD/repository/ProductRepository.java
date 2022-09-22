package com.ecommerce.harleyD.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.harleyD.model.ProductM;

public interface ProductRepository extends JpaRepository<ProductM, Long>{

}
