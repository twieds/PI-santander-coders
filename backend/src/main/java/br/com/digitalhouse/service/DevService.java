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

import br.com.digitalhouse.dto.DevDTO;
import br.com.digitalhouse.exception.DevNotFoundException;
import br.com.digitalhouse.filter.DevFilter;
import br.com.digitalhouse.mapper.DevMapper;
import br.com.digitalhouse.model.Dev;
import br.com.digitalhouse.model.Skill;
import br.com.digitalhouse.repository.CityRepository;
import br.com.digitalhouse.repository.DevRepository;
import br.com.digitalhouse.repository.SkillRepository;
import br.com.digitalhouse.repository.StateRepository;
import br.com.digitalhouse.request.DevRequest;

@Service
public class DevService {
	
	@Autowired
	private DevRepository repository;
	
	@Autowired 
	private StateRepository stateRepository;
	
	@Autowired 
	private CityRepository cityRepository;
	
	@Autowired 
	private SkillRepository skillRepository;
	
	@Autowired
	private DevMapper mapper;
	
	@GetMapping
	public List<Dev> getAllDevs(DevFilter filter) {		
		
		List<Skill> skills = skillRepository.findAll();
		Set<Long> skillsID = new HashSet<Long>();
		
		for (Skill skill: skills) {
			skillsID.add(skill.getId());
		}
		
		if (filter.getDevPractice() == null) {
			filter.setDevPractice(skillsID);			
		}
		
		if (filter.getDevSkills() == null) {
			filter.setDevSkills(skillsID);			
		}
		
		return repository.findAll(filter.getCity(), filter.getState(), filter.getDevSkills(), filter.getDevPractice());
	}

	public Optional<Dev> getDevByID(Long id) {
		return repository.findById(id);
	}
	
	@Transactional
	public DevDTO addDev(DevRequest request) {
		
		Dev dev = mapper.dtoRequestToModel(request);
		
		if (dev.getLocation().getCity().getId() == null) {
			stateRepository.save(dev.getLocation().getCity().getState());
			cityRepository.save(dev.getLocation().getCity());			
		}

		return mapper.modelToDto(repository.save(dev));
	}
	
	
	@Transactional
	public void deleteDevByID(Long id) {
		
		try {
			repository.deleteById(id);
			repository.flush();
		
		} catch (EmptyResultDataAccessException e) {
			throw new DevNotFoundException(id);
		}		
	}
	
	
	@Transactional
	public void setDevByID(Dev dev) {
		repository.save(dev);
	}

}
