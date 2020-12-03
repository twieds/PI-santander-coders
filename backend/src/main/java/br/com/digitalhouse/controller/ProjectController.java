package br.com.digitalhouse.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.digitalhouse.dto.ProjectDTO;
import br.com.digitalhouse.filter.ProjectFilter;
import br.com.digitalhouse.model.Project;
import br.com.digitalhouse.request.ProjectRequest;
import br.com.digitalhouse.service.ProjectService;

@CrossOrigin
@RestController
@RequestMapping("/project")
public class ProjectController {
	
	@Autowired
	private ProjectService service;
	
	@GetMapping
	public List<Project> getAllProjects(ProjectFilter filter) {
		return service.getAllProjects(filter);
	}

	
	@GetMapping("/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
		Optional<Project> project = service.getProjectById(id);

		if (project.isPresent()) {
			return ResponseEntity.ok(project.get());
		}

		return ResponseEntity.notFound().build();
	}

	
	@PostMapping
	public ResponseEntity<?> addProject(@RequestBody @Valid ProjectRequest request) {
		try {
			ProjectDTO project = service.addProject(request);
			return ResponseEntity.status(HttpStatus.CREATED).body(project);
		} catch (Exception ex) {
			return ResponseEntity.badRequest().body(ex.getMessage());
		}
	}

	
	@DeleteMapping("/{id}")
	public ResponseEntity<Project> deleteProjectByID(@PathVariable Long id) {
		try {
			service.deleteProjectByID(id);
			return ResponseEntity.noContent().build();

		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}
	}

	
	//FIXME: o put não funciona
	@PutMapping("/{id}")
	public ResponseEntity<?> setProjectById(@PathVariable Long id, @RequestBody Project project) {

		Project currentProject = service.getProjectById(id).orElse(null);

		if (currentProject != null) {
			BeanUtils.copyProperties(project, currentProject, "id");
			service.setProjectById(currentProject);
			return ResponseEntity.ok(currentProject);
		}

		return ResponseEntity.notFound().build();
	}

}

