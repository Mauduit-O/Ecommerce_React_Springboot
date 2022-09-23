package com.ecommerce.harleyD.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecommerce.harleyD.model.SubcategoryM;

public interface SubcategoryRepository extends JpaRepository<SubcategoryM, Long> {
	@Query(
			value= "SELECT * FROM subcategory Inner join category on category.id=subcategory.id_category WHERE id_category = ?1",
			nativeQuery = true
	)
	Collection<SubcategoryM> SelectSubCat(Long SubcategoryM);

}
