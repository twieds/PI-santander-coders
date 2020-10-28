package br.com.digitalhouse.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Data
@Entity
@Table(name = "project")
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	//TODO: adicionar novamente apos os testes
//	@ManyToOne
//	@JoinColumn(name = "id_ong")
//	private Ong ong;
	
	@Column
	private String title;
	
	@Column(columnDefinition="TEXT")
	private String description;
	
	@DateTimeFormat(pattern="yyyy-mm-dd")
	@Column(name="deadline")
	private LocalDate deadline;
	
	@Column(columnDefinition="TINYTEXT")
	private String tags;
	
	@Column
	private int id_category;
	
	//TODO: adicionar novamente apos os testes
//	@Column(columnDefinition = "ENUM('front_end', 'back_end', 'full_stack', 'mobile', 'desktop')")
//    @Enumerated(EnumType.STRING)
//    private Category category;
}
