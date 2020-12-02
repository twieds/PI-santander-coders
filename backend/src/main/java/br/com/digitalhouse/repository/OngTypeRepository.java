package br.com.digitalhouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.OngType;

@Repository
public interface OngTypeRepository extends JpaRepository<OngType, Long> {

	
}
