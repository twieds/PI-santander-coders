package br.com.digitalhouse.repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.Dev;

@Repository
public interface DevRepository extends JpaRepository<Dev, Long>{
	
	@Query("from Dev d "
			+ "join d.dev_practice p "
			+ "join d.dev_skills s "
			+ "where "
			+ "(:city is null or d.location.city.id = :city)  "
			+ "and (:state is null or d.location.city.state.id = :state) "
			+ "and p.id in (:devPractice) "
			+ "and s.id in (:devSkills) "
			+ "group by d.id")
	
	List<Dev> findAll(Long city, Long state, Set<Long> devSkills, Set<Long>devPractice);
	
//	@Query("from Dev d "
//			+ " where"
//			+ "d.email = :email")
	Optional<Dev> findByEmail(String email);

}
