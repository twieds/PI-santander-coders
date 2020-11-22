package br.com.digitalhouse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.digitalhouse.model.Dev;
import br.com.digitalhouse.model.User;
import br.com.digitalhouse.repository.UserRepository;

@Service
public class UserService {

	
	@Autowired
	private UserRepository repository;
	
	@PostMapping
	public void addUser(@RequestBody User user) {
		repository.save(user);
	}
	
	@GetMapping
	public Dev getUser(@PathVariable String email, @PathVariable String password) {
		return repository.findUser(email,password).orElse(null);
	}
	
	
}
