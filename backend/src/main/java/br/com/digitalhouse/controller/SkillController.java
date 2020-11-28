package br.com.digitalhouse.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.digitalhouse.model.Skill;
import br.com.digitalhouse.repository.SkillRepository;

@CrossOrigin
@RestController
@RequestMapping("/skill")
public class SkillController {
	
	@Autowired
	private SkillRepository repository;
	
	@GetMapping
	public List<Skill> getAllSkills() {
		return repository.findAll();
	}
	
	@GetMapping("/{id}")
	public Optional<Skill> getSkillById(@PathVariable Long id) {
		return repository.findById(id);
	}

}