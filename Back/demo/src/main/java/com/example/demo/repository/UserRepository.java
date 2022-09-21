package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.UserM;

public interface UserRepository extends JpaRepository<UserM, Long>{
	UserM findByEmail(String email);
}
