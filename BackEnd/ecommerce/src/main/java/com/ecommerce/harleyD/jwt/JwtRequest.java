package com.ecommerce.harleyD.jwt;

public class JwtRequest {

	//Cette classe permet de gérer le login
	// elle contient l'email et le password
	
	private String email;
    private String password;
    
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}