package br.com.digitalhouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long>{

}