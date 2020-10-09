package br.com.digitalhouse.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "ong")
public class Ong {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private Long id_user;
	
	@Column
	private String name;
	
	@Column
	private String cnpj;
	
	@Column(columnDefinition="TEXT")
	private String bio;
	
	@Column(columnDefinition="TEXT")
	private String how_can_we_help;
	
	@Column(columnDefinition="TINYTEXT")
	private String socials;
	
	@Column
	private Long id_location;

}
