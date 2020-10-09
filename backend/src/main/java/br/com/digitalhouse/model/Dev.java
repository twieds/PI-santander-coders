package br.com.digitalhouse.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;


@Entity
@Table(name = "dev")
public class Dev {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private Long id_user;
	
	@Column
	private String name;
	
	@Lob
	private Byte[] avatar;
	
	@Column(columnDefinition="TEXT")
	private String bio;
	
	@Column(columnDefinition="TINYTEXT")
	private String tags;
	
	@Column
	private Long id_location;	
}
