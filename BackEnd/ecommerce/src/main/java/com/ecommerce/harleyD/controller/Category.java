package com.ecommerce.harleyD.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.harleyD.model.CategoryM;
import com.ecommerce.harleyD.model.ProductM;
import com.ecommerce.harleyD.model.SubcategoryM;
import com.ecommerce.harleyD.repository.CategoryRepository;
import com.ecommerce.harleyD.repository.ProductRepository;
import com.ecommerce.harleyD.repository.SubcategoryRepository;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class Category {
	
	@Autowired
	private CategoryRepository categoryRepo;
	
	@Autowired
	private SubcategoryRepository subcategoryReposotiry;
	
	@Autowired
	private ProductRepository productRepository;
	
	
	@GetMapping("/category")
	private List<CategoryM> CategoryList(CategoryM categoryM, Model model, BindingResult bindingResult) {
		List<CategoryM> categorys = categoryRepo.findAll();
		model.addAttribute("categorys", categorys);
		return categorys;
	}
	
	@GetMapping("/subcategory")
	private List<SubcategoryM> SubcategoryList() {
		List<SubcategoryM> subcategorys = subcategoryReposotiry.findAll();
		return subcategorys;
	}
	
	@GetMapping("/product")
	private List<ProductM> ProductList() {
		List<ProductM> products = productRepository.findAll();
		return products;
	}
	
	@GetMapping("/productById{id}")
	private Collection<ProductM> ProductByIdCat(@PathVariable(value="id") Long ProductM) {
		Collection<ProductM> products = productRepository.findByIdCat(ProductM);
		return products;
	}
	
	@GetMapping("/productBySubcat{id}")
	private Collection<ProductM> ProductBySubcat(@PathVariable(value="id") Long ProductM) {
		Collection<ProductM> products = productRepository.productBySubcat(ProductM);
		return products;
	}
	
	@GetMapping("/selectSubCat{id}")
	private Collection<SubcategoryM> SelectProduct(@PathVariable(value="id") Long SubcategoryM) {
		Collection<SubcategoryM> subcat = subcategoryReposotiry.SelectSubCat(SubcategoryM);
		return subcat;
	}
	
}
