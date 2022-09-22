package com.ecommerce.harleyD.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.harleyD.model.UserM;

public interface UserRepository extends JpaRepository<UserM, Long>{
	UserM findByEmail(String email);
}
