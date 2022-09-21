package com.example.demo.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.model.UserM;
import com.example.demo.repository.UserRepository;

@Controller
public class Login {
	
//private UserRepository userRepository;
//	
//	
	@GetMapping("/test")
	public String userLogin(@Validated UserM userM, BindingResult bindingResult) {
		
		System.out.println(userM.getEmail());
		
		
		if(bindingResult.hasErrors()) {
			System.out.println("eeeeeeeeeeeeeeeee");
			return "test";
		}
		
		return "test";
	}



//	@GetMapping("/list_users")
//	public String viewListUsers( Model model) {
//		List<UserM> listUsers = userRepository.findAll();
//		
//	    model.addAttribute("listUsers", listUsers);
//	//		String userName = ((UserLogin ) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
//	//		UserRegister user = new UserRegister();
//	//		user = ((UserRegisterRepository) userRegisterService).findByEmail(userName); 
//		return "users";
//	}

}
