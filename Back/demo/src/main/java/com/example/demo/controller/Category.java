package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CategoryM;
import com.example.demo.model.ProductM;
import com.example.demo.model.SubcategoryM;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.SubcategoryRepository;


@CrossOrigin(origins="http://localhost:3002/")
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
	
}
