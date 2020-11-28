package br.com.digitalhouse.request;

import java.util.List;

import javax.validation.constraints.NotBlank;

import br.com.digitalhouse.model.Location;
import br.com.digitalhouse.model.Skill;
import lombok.Data;

@Data
public class DevRequest {

	private Long id;	
	@NotBlank
	private String name;
	private String email;
	private String password;
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

