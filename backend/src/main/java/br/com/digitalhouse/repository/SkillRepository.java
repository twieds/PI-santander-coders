package br.com.digitalhouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {

//	@Query("from Dev where skill.id = :id")
//	List<City> getDevs(Long id);
	
}