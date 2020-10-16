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

import br.com.digitalhouse.model.Project;
import br.com.digitalhouse.repository.ProjectRepository;

@Service
public class ProjectService {
	@Autowired
	private ProjectRepository repository;
	
	@GetMapping
	public List<Project> getAllProjects() {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Project getProjectByID(@PathVariable Long id) {
		return repository.findById(id).orElse(null);
	}
	
	@PostMapping
	public void addProject(@RequestBody Project project) {
		repository.save(project);
	}
	
	@DeleteMapping("/{id}")
	public void deleteProjectByID(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public void setProjectByID(@PathVariable Long id, @RequestBody Project project) {

	}
}
