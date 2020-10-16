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
import br.com.digitalhouse.service.ProjectService;

@CrossOrigin
@RestController
@RequestMapping("/project")
public class ProjectController {
	
	@Autowired
	private ProjectService service;
	
	@GetMapping
	public List<Project> getAllProjects() {
		return service.getAllProjects();
	}
	
	@GetMapping("/{id}")
	public Project getProjectByID(@PathVariable Long id) {
		return service.getProjectByID(id);
	}
	
	@PostMapping
	public void addProject(@RequestBody Project project) {
		service.addProject(project);
	}
	
	@DeleteMapping("/{id}")
	public void deleteProjectByID(@PathVariable Long id) {
		service.deleteProjectByID(id);
	}
	
	@PutMapping("/{id}")
	public void setProjectByID(@PathVariable Long id, @RequestBody Project project) {
		service.setProjectByID(id, project);
	}

}

