package br.com.digitalhouse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.digitalhouse.model.Dev;
import br.com.digitalhouse.repository.DevRepository;

@Service
public class DevService {
	
	@Autowired
	private DevRepository repository;
	
	@GetMapping
	public List<Dev> getAllDevs() {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Dev getDevByID(@PathVariable Long id) {
		return repository.findById(id).orElse(null);
	}
	
	@PostMapping
	public void addDev(@RequestBody Dev dev) {
		repository.save(dev);
	}
	
	@DeleteMapping("/{id}")
	public void deleteDevByID(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public void setDevByID(@PathVariable Long id, @RequestBody Dev dev) {

	}
}
