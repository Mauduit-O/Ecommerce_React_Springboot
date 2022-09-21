package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.demo.model.UserLogin;
import com.example.demo.model.UserM;
import com.example.demo.repository.UserRepository;

public class UserLoginDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		UserM userM = userRepository.findByEmail(email);
		
		if(userM == null) {
            throw new UsernameNotFoundException("User not found");
		}
		return new UserLogin(userM);
	}

}
