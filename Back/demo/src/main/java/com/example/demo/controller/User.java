package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.model.UserM;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserRegisterService;

@Controller
public class User {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserRegisterService userRegisterService;
	
	@GetMapping("/register")
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
	
	@PostMapping("/register")
	private String AddUser(@Validated UserM user, Model model, BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			return "register";
		}
				
		userRegisterService.addUser(user);		
		return "register";
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
