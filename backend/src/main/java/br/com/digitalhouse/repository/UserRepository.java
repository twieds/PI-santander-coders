package br.com.digitalhouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}