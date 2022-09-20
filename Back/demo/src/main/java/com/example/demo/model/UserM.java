package com.example.demo.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name="user")
public class UserM {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@NotNull(message = "Lastname may not be null")
	@Length(min = 2, max = 50)
	private String lastname;
	
	@NotNull(message = "Firstname may not be null")
	@Length(min = 2, max = 50)
	private String firstname;
	
	@NotNull(message = "Date may not be null")
	private Date date_register;
	
	@NotNull(message = "Street may not be null")
	@Length(min = 3, max = 150)
	private String street;
	
	@NotNull(message = "City may not be null")
	@Length(min = 3, max = 50)
	private String city;
	
	@NotNull(message = "Postal code may not be null")
	@Length(min = 5, max = 5)
	private String postal_code;
	
	@NotNull(message = "Country may not be null")
	@Length(min = 3, max = 50)
	private String country;
	
	@NotNull(message = "Phone may not be null")
	@Length(min = 10, max = 10)
	private String phone;
	

	
	@NotNull(message = "Email may not be null")
	@Pattern(regexp = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$", 
    message = "Invalid Password pattern. Password must contain 8 to 20 characters at least one digit, lower, upper case and one special character."
    )
	@Length(min =7, max = 100)
	private String email;
	
	@NotNull(message = "Lastname may not be null")
	@Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;.',?/*~$^+=<>]).{8,5000}$", 
    message = "Invalid Password pattern. Password must contain 8 to 5000 characters at least one digit, lower, upper case and one special character."
    )
	@Length(min = 8, max = 5000)
	private String password;


	public UserM() {
		this.date_register = new Date();
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public Date getDate_register() {
		return date_register;
	}

	public void setDate_register(Date date_register) {
		this.date_register = date_register;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPostal_code() {
		return postal_code;
	}

	public void setPostal_code(String postal_code) {
		this.postal_code = postal_code;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

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

	@Override
	public String toString() {
		return "UserM " + id + " " + lastname + " " + firstname + " "
				+ date_register + " " + street + " " + city + " " + postal_code
				+ " " + country + " " + phone + " " + email + " " + password;
	}
}
