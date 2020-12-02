package br.com.digitalhouse.model;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "ong")
public class Ong {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String name;
	
	@Column(columnDefinition="TEXT")
	private String bio;
	
	@Column(columnDefinition="TEXT")
	private String how_can_we_help;
	
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
