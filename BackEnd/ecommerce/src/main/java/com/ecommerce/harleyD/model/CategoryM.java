package com.ecommerce.harleyD.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name="category")
public class CategoryM {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message = "Title may not be null")
	@Length(min = 3, max = 150)
	private String title;
	
	@NotNull(message = "SubTitle may not be null")
	 @Length(min = 3, max = 400)
	private String subtitle;
	
	@NotNull(message = "Image may not be null")
	private String image;

	public CategoryM() {
	}

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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "CategoryM " + id + " =" + title + " " + subtitle + " " + image ;
	}
	
}