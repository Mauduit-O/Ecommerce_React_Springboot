package com.ecommerce.harleyD.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserLoginM implements UserDetails {
	
	private static final long serialVersionUID = 1L;
	
	private UserM userM;
	
	public UserLoginM(UserM userM) {
		this.userM = userM;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPassword() {
		return userM.getPassword();
	}

	@Override
	public String getUsername() {
		return userM.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
	
	public String getFullName() {
		return userM.getLastname() + " " + userM.getFirstname();
	}

}
