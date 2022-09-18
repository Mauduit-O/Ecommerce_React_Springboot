package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CategoryM;
import com.example.demo.model.SubcategoryM;
import com.example.demo.model.UserM;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.repository.SubcategoryRepository;
import com.example.demo.repository.UserRepository;

@CrossOrigin(origins="http://localhost:3002/")
@RestController
public class Category {
	
	@Autowired
	private CategoryRepository categoryRepo;
	
	@Autowired
	private SubcategoryRepository subcategoryReposotiry;
	
//	@Autowired
//	private UserRepository userRepository;
	
	
	@GetMapping("/category")
	private List<CategoryM> CategoryList(CategoryM categoryM, Model model, BindingResult bindingResult) {
//		if(bindingResult.hasErrors()) {
//			return "home";
//		}
		
		List<CategoryM> categorys = categoryRepo.findAll();
		model.addAttribute("categorys", categorys);
		
//		List<SubcategoryM> subcategorys = subcategoryReposotiry.findAll();
//		model.addAttribute("subcategorys", subcategorys);
		
		return categorys;
	}
	
	

	
//	@PostMapping("/")
//	public String postHome(@Valid @ModelAttribute("user") UserM user, BindingResult bindingResult) {
//		System.out.println(bindingResult.hasErrors());
////		System.out.println(user.getEmail());
//		if(bindingResult.hasErrors()) {
//			return "home";
//		}
//		
//
//		userRepository.save(user);
//
//		
//		return "home";
//	}

	
}
