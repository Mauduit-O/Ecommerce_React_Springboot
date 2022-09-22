package com.ecommerce.harleyD.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.ecommerce.harleyD.model.UserLoginM;
import com.ecommerce.harleyD.model.UserM;
import com.ecommerce.harleyD.repository.UserRepository;

public class UserLoginDetailsService implements UserDetailsService{

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UserM userM = userRepository.findByEmail(email);
		
		if(userM == null) {
            throw new UsernameNotFoundException("User not found");
		}
		return new UserLoginM(userM);
	}

}
