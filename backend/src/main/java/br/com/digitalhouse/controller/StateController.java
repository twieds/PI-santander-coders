package br.com.digitalhouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.digitalhouse.model.City;
import br.com.digitalhouse.model.State;
import br.com.digitalhouse.repository.StateRepository;

@CrossOrigin
@RestController
@RequestMapping("/state")
public class StateController {
	
	@Autowired
	private StateRepository repository;
	
	@PostMapping
	public void save(@RequestBody State state) {
		repository.save(state);
	}
	
	@GetMapping
	public List<State> getAllStates() {
		return repository.findAll();
	}
	
	@GetMapping("/{id}/cities")
	public List<City> getCitiesByState(@PathVariable Long id) {
		return repository.getCities(id);
	}

}