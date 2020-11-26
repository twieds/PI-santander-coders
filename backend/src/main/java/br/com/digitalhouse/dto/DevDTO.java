package br.com.digitalhouse.dto;

import br.com.digitalhouse.model.Location;
import lombok.Data;

@Data
public class DevDTO {

	private Long id;	
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
