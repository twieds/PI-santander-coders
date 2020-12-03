package br.com.digitalhouse.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import br.com.digitalhouse.dto.ProjectDTO;
import br.com.digitalhouse.exception.DevNotFoundException;
import br.com.digitalhouse.filter.ProjectFilter;
import br.com.digitalhouse.mapper.ProjectMapper;
import br.com.digitalhouse.model.Project;
import br.com.digitalhouse.model.Skill;
import br.com.digitalhouse.repository.ProjectRepository;
import br.com.digitalhouse.repository.SkillRepository;
import br.com.digitalhouse.request.ProjectRequest;

@Service
public class ProjectService {
	@Autowired
	private ProjectRepository repository;

	@Autowired
	private SkillRepository skillRepository;

	@Autowired
	private ProjectMapper mapper;

	@GetMapping
	public List<Project> getAllProjects(ProjectFilter filter) {
		
		List<Skill> skills = skillRepository.findAll();
		Set<Long> skillsID = new HashSet<Long>();
		
		
		if (filter.getProjectSkills() == null) {

			for (Skill skill : skills) {
				skillsID.add(skill.getId());
			}

			filter.setProjectSkills(skillsID);
		}

		return repository.findAll(filter.getCity(), filter.getState(), filter.getProjectSkills());
	}

	public Optional<Project> getProjectById(Long id) {
		return repository.findById(id);
	}
	

	@Transactional
	public ProjectDTO addProject(ProjectRequest request) {

		Project project = mapper.dtoRequestToModel(request);
		return mapper.modelToDto(repository.save(project));
	}

	
	@Transactional
	public void deleteProjectByID(Long id) {

		try {
			repository.deleteById(id);
			repository.flush();

		} catch (EmptyResultDataAccessException e) {
			throw new DevNotFoundException(id);
		}
	}

	@Transactional
	public void setProjectById(Project project) {
		repository.save(project);
	}
}
