package br.com.digitalhouse.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Data
@Entity
@Table(name = "project")
public class Project {

	@EqualsAndHashCode.Include
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "ong_id")
	private Ong ong;
	
	@Column
	private String title;
	
	@Column(columnDefinition="TEXT")
	private String description;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	@Column(name="deadline")
	private LocalDate deadline;
	
	@ManyToMany
	@JoinTable(name = "project_skills", joinColumns = @JoinColumn(name = "project_id"))
	@Column(name = "skill_id")
	private  List<Skill> project_skills;
	
}
