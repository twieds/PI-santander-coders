package br.com.digitalhouse.dto;

import br.com.digitalhouse.model.Location;
import lombok.Data;

@Data
public class OngDTO {
	
	private Long id;
	private String name;
	private String bio;
	private String how_can_we_help;
	private Location location;
	private Long ongType;
	private String whatsapp;
	private String facebook;
	private String instagram;
	private String contact_email;
}
