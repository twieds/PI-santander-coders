package br.com.digitalhouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

	
}