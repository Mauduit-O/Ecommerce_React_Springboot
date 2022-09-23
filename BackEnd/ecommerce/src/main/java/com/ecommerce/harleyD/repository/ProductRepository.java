package com.ecommerce.harleyD.repository;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecommerce.harleyD.model.ProductM;

public interface ProductRepository extends JpaRepository<ProductM, Long>{
	@Query(
			value= "SELECT * FROM product Inner join subcategory on product.id_subcategory = subcategory.id "
					+ "INNER JOIN category on category.id = subcategory.id_category WHERE category.id = ?1",
			nativeQuery = true
					)
	Collection<ProductM> findByIdCat(Long productM);
	
	@Query(
			value= "SELECT * FROM product Inner JOIN subcategory on"
					+ " subcategory.id=product.id_subcategory WHERE id_subcategory = ?1",
			nativeQuery = true
					)
	Collection<ProductM> productBySubcat(Long productM);
	
	
	
}
