package br.com.digitalhouse.model;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "dev")
public class Dev {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Embedded
	private User user_auth;
	
	@Column
	private String name;
	
//	@Lob
//	private Byte[] avatar;
	
	@Column
	private String avatar;
	
	@Column(columnDefinition="TEXT")
	private String bio;
	
	@Column(columnDefinition="TINYTEXT")
	private String tags;
	
	@Embedded
	private Location location;
}
