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

import br.com.digitalhouse.model.Project;
import br.com.digitalhouse.repository.ProjectRepository;

@CrossOrigin
@RestController
@RequestMapping("/project")
public class ProjectController {
	
	@Autowired
	private ProjectRepository repository;
	
	@GetMapping
	public List<Project> listar() {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Project buscar(@PathVariable Long id) {
		return repository.findById(id).orElse(null);
	}
	
	@PostMapping
	public void salvar(@RequestBody Project project) {
		repository.save(project);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public void atualizar(@PathVariable Long id, @RequestBody Project project) {

	}

}

