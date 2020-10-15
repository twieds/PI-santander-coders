package br.com.digitalhouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.Ong;

@Repository
public interface OngRepository extends JpaRepository<Ong, Long>{

}