package br.com.digitalhouse.request;

import javax.validation.constraints.NotBlank;

import br.com.digitalhouse.model.Location;
import lombok.Data;

@Data
public class DevRequest {

	private Long id;	
	@NotBlank
	private String name;
	private String bio;
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

