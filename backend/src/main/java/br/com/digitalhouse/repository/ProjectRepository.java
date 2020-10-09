 package br.com.digitalhouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{

}
