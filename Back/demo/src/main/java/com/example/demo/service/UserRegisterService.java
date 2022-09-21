package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserM;
import com.example.demo.repository.UserRepository;

@Service
public class UserRegisterService {
	
	@Autowired
	private UserRepository userRepository;
	
	public void addUser(UserM user) {
		BCryptPasswordEncoder encodePwd = new BCryptPasswordEncoder();
		user.setPassword(encodePwd.encode(user.getPassword()));
		
		userRepository.save(user);

	}
	

}
