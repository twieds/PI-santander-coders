package br.com.digitalhouse.dto;

import br.com.digitalhouse.model.Location;
import lombok.Data;

@Data
public class OngDTO {
	
	private Long id;
	private String name;
	private String bio;
	private String password;
	private String email;
	private String how_can_we_help;
	private Location location;
	private Long ongTypeId;
	private String whatsapp;
	private String facebook;
	private String instagram;
	private String contact_email;
}
