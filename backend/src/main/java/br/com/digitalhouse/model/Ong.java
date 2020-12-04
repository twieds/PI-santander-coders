package br.com.digitalhouse.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Data
@Entity
@Table(name = "ong")
public class Ong {

	@EqualsAndHashCode.Include
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String name;
	
	@Column
	private String email;
	
	@Column
	private String password;
	
	@Column(columnDefinition="TEXT")
	private String bio;
	
	@Column(columnDefinition="TEXT")
	private String how_can_we_help;
	
	@JsonIgnore
	@OneToMany(mappedBy="ong")
	private List<Project> projects;
	
	@Embedded
	private Location location;
	
	@Column
	private Long ongTypeId;
	
	@Column
	private String whatsapp;
	
	@Column
	private String facebook;
	
	@Column
	private String instagram;
	
	@Column
	private String contact_email;
	
}
