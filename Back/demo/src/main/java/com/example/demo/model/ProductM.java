package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name="product")
public class ProductM {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message = "Title may not be null")
	@Length(min = 3, max = 150)
	private String title;
	
	@NotNull(message = "Subtitle may not be null")
	@Length(min = 3, max = 150)
	private String subtitle;
	
	@NotNull(message = "Description may not be null")
	@Length(min = 3, max = 500)
	private String description;
	
	@NotNull(message = "Price may not be null")
	private float price;
	
	@NotNull(message = "Image may not be null")
	private String image;
	
	@NotNull(message = "Stock may not be null")
	@Length(min = 1, max = 10)
	private int stock;
	
	@NotNull(message = "Stock minimum may not be null")
	@Length(min = 1, max = 10)
	private int stock_minimum;
	
	@NotNull(message = "Id subcategory may not be null")
    @OneToOne(cascade={CascadeType.PERSIST, CascadeType.REMOVE},orphanRemoval=true)
    @JoinColumn(name = "id_subcategory")
	private SubcategoryM  id_subcategory;


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubtitle() {
		return subtitle;
	}

	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public int getStock_minimum() {
		return stock_minimum;
	}

	public void setStock_minimum(int stock_minimum) {
		this.stock_minimum = stock_minimum;
	}

	public SubcategoryM getId_subcategory() {
		return id_subcategory;
	}

	public void setId_subcategory(SubcategoryM id_subcategory) {
		this.id_subcategory = id_subcategory;
	}

	@Override
	public String toString() {
		return "ProductM " + id + " " + title + " " + subtitle + " " + description
				+ " " + price + " " + image + " " + stock + " " + stock_minimum
				+ " " + id_subcategory;
	}
    
}
