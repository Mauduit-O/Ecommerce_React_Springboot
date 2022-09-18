package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.model.UserM;
import com.example.demo.repository.UserRepository;

@Controller
public class User {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/register")
	private String userShow( UserM user, Model model, BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
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
				
		userRepository.save(user);
		
		return "register";
	}
}
