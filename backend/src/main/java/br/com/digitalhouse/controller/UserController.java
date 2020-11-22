package br.com.digitalhouse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.digitalhouse.model.Dev;
import br.com.digitalhouse.model.User;
import br.com.digitalhouse.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping
	public Dev getDevByID(@PathVariable String email, @PathVariable String password) {
		return service.getUser(email, password);
	}
	@PostMapping
	public void addUser(@RequestBody User user) {
		
		
		
		
		service.addUser(user);
	}

}
