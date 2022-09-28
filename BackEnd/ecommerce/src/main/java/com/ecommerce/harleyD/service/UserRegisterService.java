package com.ecommerce.harleyD.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.ecommerce.harleyD.model.UserM;
import com.ecommerce.harleyD.repository.UserRepository;

@Service
public class UserRegisterService {
	
	@Autowired
	private UserRepository userRepository;
//	
//	public void addUser(UserM user) {
//		BCryptPasswordEncoder encodePwd = new BCryptPasswordEncoder();
//		user.setPassword(encodePwd.encode(user.getPassword()));
//		
//		userRepository.save(user);
//	}
	
	public UserM saveUser(UserM userInfo) {
		UserM user = new UserM();
	    user.setEmail(userInfo.getEmail());
	    user.setPassword(new BCryptPasswordEncoder().encode(userInfo.getPassword()));
	    user.setLastname(StringUtils.capitalize(userInfo.getLastname()));
	    user.setFirstname(StringUtils.capitalize(userInfo.getFirstname()));
	    user.setStreet(StringUtils.capitalize(userInfo.getStreet()));
	    user.setCity(StringUtils.capitalize(userInfo.getCity()));
	    user.setPostal_code(StringUtils.capitalize(userInfo.getPostal_code()));
	    user.setCountry(StringUtils.capitalize(userInfo.getCountry()));
	    user.setPhone(StringUtils.capitalize(userInfo.getPhone()));
	    
	    userRepository.save(user);
	    return user;
	}
}
