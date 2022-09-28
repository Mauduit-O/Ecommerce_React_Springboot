package com.ecommerce.harleyD.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.harleyD.model.SubcategoryM;
import com.ecommerce.harleyD.repository.SubcategoryRepository;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class Subcategory {
	
	@Autowired
	private SubcategoryRepository subcategoryReposotiry;
	
	@GetMapping("/subcategory")
	private List<SubcategoryM> SubcategoryList() {
		List<SubcategoryM> subcategorys = subcategoryReposotiry.findAll();
		return subcategorys;
	}
	

	@GetMapping("/selectSubCat{id}")
	private Collection<SubcategoryM> SelectProduct(@PathVariable(value="id") Long SubcategoryM) {
		Collection<SubcategoryM> subcat = subcategoryReposotiry.SelectSubCat(SubcategoryM);
		return subcat;
	}

}
