package com.ecommerce.harleyD.jwt;

public class JwtResponse {
	//Renvoi la response de la requete (elle contient le mail du user connecté)

    private String userName;
    
    public JwtResponse(String username) {
        this.userName = username;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
	
}
