package br.com.digitalhouse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.City;
import br.com.digitalhouse.model.State;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {

	@Query("from City where state.id = :id")
	List<City> getCities(Long id);
	
}