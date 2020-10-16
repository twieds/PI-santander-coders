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

import br.com.digitalhouse.model.Ong;
import br.com.digitalhouse.repository.OngRepository;

@Service
public class OngService {
	@Autowired
	private OngRepository repository;
	
	@GetMapping
	public List<Ong> getAllOngs() {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Ong getOngByID(@PathVariable Long id) {
		return repository.findById(id).orElse(null);
	}
	
	@PostMapping
	public void addOng(@RequestBody Ong ong) {
		repository.save(ong);
	}
	
	@DeleteMapping("/{id}")
	public void deleteOngByID(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public void setOngByID(@PathVariable Long id, @RequestBody Ong ong) {

	}
}
