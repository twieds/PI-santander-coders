package br.com.digitalhouse.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.digitalhouse.model.OngType;
import br.com.digitalhouse.repository.OngTypeRepository;

@CrossOrigin
@RestController
@RequestMapping("/ongType")
public class OngTypeController {
	
	@Autowired
	private OngTypeRepository repository;
	
	@GetMapping
	public List<OngType> getAllOngTypes() {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<OngType> getOngTypeById(@PathVariable Long id) {
		return repository.findById(id);
	}
	

}
