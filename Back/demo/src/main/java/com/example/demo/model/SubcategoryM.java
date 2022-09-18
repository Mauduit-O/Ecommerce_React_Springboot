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
@Table(name="subcategory")
public class SubcategoryM {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message = "Title may not be null")
	@Length(min = 3, max = 150)
	private String title;
	
	@NotNull(message = "Id category may not be null")
    @OneToOne(cascade={CascadeType.PERSIST, CascadeType.REMOVE},orphanRemoval=true)
    @JoinColumn(name = "id_category")
	private CategoryM id_category;

	public SubcategoryM() {
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

	public CategoryM getId_category() {
		return id_category;
	}

	public void setId_category(CategoryM id_category) {
		this.id_category = id_category;
	}

	@Override
	public String toString() {
		return "SubcatgoryM " + id + " " + title + " " + id_category;
	}
}
