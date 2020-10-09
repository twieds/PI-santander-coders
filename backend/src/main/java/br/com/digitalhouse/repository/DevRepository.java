package br.com.digitalhouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.Dev;

@Repository
public interface DevRepository extends JpaRepository<Dev, Long>{

}
