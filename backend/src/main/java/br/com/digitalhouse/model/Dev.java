package br.com.digitalhouse.model;


import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "dev")
public class Dev {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
//	@Embedded
//	private User user_auth;
	
	@Column
	private String name;

	@Column(columnDefinition="TEXT")
	private String bio;
	
	@Embedded
	private Location location;
	
//	@ManyToMany
//	@JoinTable(name = "dev_practice", joinColumns = @JoinColumn(name = "dev_id"))
//	@Column(name = "practice_id")
//	private List<Stack> practice_stack;
	
//	@ManyToMany
//	@JoinTable(name = "dev_skills", joinColumns = @JoinColumn(name = "dev_id"))
//	@Column(name = "skills_id")
//	private List<Stack> skills_stack;
}
