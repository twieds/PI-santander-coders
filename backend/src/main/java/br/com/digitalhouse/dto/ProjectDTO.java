package br.com.digitalhouse.dto;

import java.time.LocalDate;
import java.util.List;

import br.com.digitalhouse.model.Ong;
import br.com.digitalhouse.model.Skill;
import lombok.Data;

@Data
public class ProjectDTO {
	
	private Long id;
	private Ong ong;
	private String title;
	private String description;
	private LocalDate deadline;
	private List<Skill> project_skills;

}
