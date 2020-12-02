package br.com.digitalhouse.model;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Embeddable
public class Location {
	
	@ManyToOne
	@JoinColumn(name = "location_city_id", nullable = false)
	private City city;
	
}
