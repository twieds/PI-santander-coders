package br.com.digitalhouse.dto;

import java.util.List;

import javax.persistence.Column;

import br.com.digitalhouse.model.Location;
import br.com.digitalhouse.model.Skill;
import lombok.Data;

@Data
public class DevDTO {

	private Long id;	
	private String email;
	private String password;
	private String name;
	private String bio;
	private Location location;
	private String whatsapp;
	private String linkedin;
	private String github;
	private String contact_email;
	private List<Skill> dev_practice;
	private List<Skill> dev_skills;
	
//	@ManyToMany
//	@JoinTable(name = "dev_skills", joinColumns = @JoinColumn(name = "dev_id"))
//	@Column(name = "skills_id")
//	private List<Stack> skills_stack;
}
