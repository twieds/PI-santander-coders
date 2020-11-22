package br.com.digitalhouse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.digitalhouse.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	//@Override
	List<User> findUser(String email, String password);
}
