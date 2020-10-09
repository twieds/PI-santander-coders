package br.com.digitalhouse.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name = "project")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String title;
	
	@Column(columnDefinition="TEXT")
	private String description;
	
	@DateTimeFormat(pattern="yyyy-mm")
	@Column(name="deadline")
	private LocalDate deadline;
	
	@Column(columnDefinition="TINYTEXT")
	private String socials;
	
	@Column(columnDefinition="TINYTEXT")
	private String tags;
	
	@Column(columnDefinition = "ENUM('front_end', 'back_end', 'full_end', 'mobile', 'desktop')")
    @Enumerated(EnumType.STRING)
    private Category category;
}
