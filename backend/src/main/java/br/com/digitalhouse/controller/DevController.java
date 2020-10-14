package br.com.digitalhouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.digitalhouse.model.Dev;
import br.com.digitalhouse.repository.DevRepository;
import br.com.digitalhouse.service.DevService;

@CrossOrigin
@RestController
@RequestMapping("/dev")
public class DevController {
	
	@Autowired
	private DevService service;
	
	@GetMapping
	public List<Dev> getAllDevs() {
		return service.getAllDevs();
	}
	
	@GetMapping("/{id}")
	public Dev getDevByID(@PathVariable Long id) {
		return service.getDevByID(id);
	}
	
	@PostMapping
	public void addDev(@RequestBody Dev dev) {
		service.addDev(dev);
	}
	
	@DeleteMapping("/{id}")
	public void deleteDevByID(@PathVariable Long id) {
		service.deleteDevByID(id);
	}
	
	@PutMapping("/{id}")
	public void setDevByID(@PathVariable Long id, @RequestBody Dev dev) {

	}

}

