package com.ecommerce.harleyD.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.harleyD.model.UserM;
import com.ecommerce.harleyD.repository.UserRepository;
import com.ecommerce.harleyD.service.UserRegisterService;

@RestController
public class User {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserRegisterService userRegisterService;
	
	@GetMapping("/")
	private String userShow( UserM user, Model model, BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			bindingResult.addError(new FieldError("user", "password", "mot de passe"));
			return "register";
		}

		List<UserM> users = userRepository.findAll();
		model.addAttribute("users", users);
		
		System.out.println(users);
		
		return "register";
	}
	
	@PostMapping("/")
	private String AddUser(@Validated UserM userM, Model model, BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			return "register";
		}
				
		userRegisterService.addUser(userM);		
		return "register";
	}
	
	@GetMapping("/login")
	public UserM userSig(@Validated UserM userM, BindingResult bindingResult) {
		
		System.out.println(userM.getEmail());
		
		
		if(bindingResult.hasErrors()) {
			System.out.println("eeeeeeeeeeeeeeeee");
			return userM;
		}
		return userM;
		
		
	}
	
//	@PostMapping("/login")
//	public String userSignin(@Validated UserM userM, BindingResult bindingResult) {
//		
//		System.out.println(userM.getEmail());
//		
//		
//		if(bindingResult.hasErrors()) {
//			System.out.println("eeeeeeeeeeeeeeeee");
//			return "login";
//		}
//		
//		return "login";
//	}
	
	@GetMapping("/test")
	public String userLogin(@Validated UserM userM, BindingResult bindingResult) {
		
		System.out.println(userM.getEmail());
		
		
		if(bindingResult.hasErrors()) {
			System.out.println("eeeeeeeeeeeeeeeee");
			return "test";
		}
		
		return "test";
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