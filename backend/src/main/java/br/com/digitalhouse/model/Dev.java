package br.com.digitalhouse.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Data
@Entity
@Table(name = "dev")
public class Dev {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
//	@Column(nullable = false)
	private String password;
	
//	@Column(nullable = false)
	private String email;
	
	@Column
	private String name;

	@Column(columnDefinition="TEXT")
	private String bio;
	
	@Embedded
	private Location location;
	
	@Column
	private String whatsapp;
	
	@Column
	private String linkedin;
	
	@Column
	private String github;
	
	@Column
	private String contact_email;
	
	
//	@ManyToMany
//	@JoinTable(name = "dev_group", joinColumns = @JoinColumn(name = "dev_id"),
//	private Set<Group> groups= new HashSet<>();
	
	@ManyToMany
	@JoinTable(name = "dev_practice", joinColumns = @JoinColumn(name = "dev_id"))
	@Column(name = "skill_id")
	private  List<Skill> dev_practice;
	
	@ManyToMany
	@JoinTable(name = "dev_skills", joinColumns = @JoinColumn(name = "dev_id"))
	@Column(name = "skill_id")
	private List<Skill> dev_skills;
}
