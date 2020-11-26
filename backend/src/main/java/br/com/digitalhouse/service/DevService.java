package br.com.digitalhouse.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import br.com.digitalhouse.dto.DevDTO;
import br.com.digitalhouse.exception.DevNotFoundException;
import br.com.digitalhouse.mapper.DevMapper;
import br.com.digitalhouse.model.Dev;
import br.com.digitalhouse.repository.CityRepository;
import br.com.digitalhouse.repository.DevRepository;
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
	private DevMapper mapper;
	
	@GetMapping
	public List<Dev> getAllDevs() {
		return repository.findAll();
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
