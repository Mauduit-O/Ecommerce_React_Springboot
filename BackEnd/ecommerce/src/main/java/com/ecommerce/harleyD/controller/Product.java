package com.ecommerce.harleyD.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.harleyD.model.ProductM;
import com.ecommerce.harleyD.repository.ProductRepository;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class Product {
	
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping("/product")
	private List<ProductM> ProductList() {
		List<ProductM> products = productRepository.findAll();
		return products;
	}
	
	@GetMapping("/productById{id}")
	private Collection<ProductM> ProductByIdCat(@PathVariable(value="id") Long ProductM) {
		Collection<ProductM> products = productRepository.findByIdCat(ProductM);
		return products;
	}
	
	@GetMapping("/productBySubcat{id}")
	private Collection<ProductM> ProductBySubcat(@PathVariable(value="id") Long ProductM) {
		Collection<ProductM> products = productRepository.productBySubcat(ProductM);
		return products;
	}

}
