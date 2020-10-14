package br.com.digitalhouse.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;

@Data
@Embeddable
public class Location {
	
	@Column(name = "location_district")
	private String district;
	
	@Column(name = "location_city")
	private String city;
	
	@Column(name = "location_state")
	private String state;
}
