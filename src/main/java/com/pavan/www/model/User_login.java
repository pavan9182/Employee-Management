package com.pavan.www.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User_login 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate IDs
	private Long id;
	
    @Column(unique = true, nullable = false)
	private String username;
	
    @Column(nullable = false)
	private String password;
}