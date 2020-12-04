package br.com.digitalhouse.repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.Ong;
import br.com.digitalhouse.model.Project;

@Repository
public interface OngRepository extends JpaRepository<Ong, Long>{
	
	@Query("from Ong o "
			+ "where "
			+ "(:city is null or o.location.city.id = :city)  "
			+ "and (:state is null or o.location.city.state.id = :state) "
			+ "and (o.ongTypeId in (:ongType))"
			+ "group by o.id")
	
	List<Ong> findAll(Long city, Long state, Set<Long> ongType);
	
	@Query("from Project p "
			+ "where "
			+ "(p.ong.id = :ongID)  "
			+ "group by p.id")	
	List<Project> getOngProjects(Long ongID);
	
	Optional<Ong> findByEmail(String email);

}