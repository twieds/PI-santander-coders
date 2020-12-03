 package br.com.digitalhouse.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{
	
	@Query("from Project p "
			+ "join p.project_skills s "
			+ "where "
			+ "(:city is null or p.ong.location.city.id = :city)  "
			+ "and (:state is null or p.ong.location.city.state.id = :state)  "
			+ "and s.id in (:projectSkills) "
			+ "group by p.id")

	List<Project> findAll(Long city, Long state, Set<Long> projectSkills);
	

}
