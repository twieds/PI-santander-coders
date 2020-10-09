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

import br.com.digitalhouse.model.Ong;
import br.com.digitalhouse.repository.OngRepository;

@CrossOrigin
@RestController
@RequestMapping("/ong")
public class OngController {
	
	@Autowired
	private OngRepository repository;
	
	@GetMapping
	public List<Ong> listar() {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Ong buscar(@PathVariable Long id) {
		return repository.findById(id).orElse(null);
	}
	
	@PostMapping
	public void salvar(@RequestBody Ong ong) {
		repository.save(ong);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public void atualizar(@PathVariable Long id, @RequestBody Ong ong) {

	}

}

