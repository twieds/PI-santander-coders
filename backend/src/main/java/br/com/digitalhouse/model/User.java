package br.com.digitalhouse.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


@Data
@Entity
@Table(name = "user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@Column
	private String email;
	
	@Column
	private String password;
	
	@Column(columnDefinition = "ENUM('admin', 'mod', 'dev', 'ong')")
    @Enumerated(EnumType.STRING)
    private Role role;
}
