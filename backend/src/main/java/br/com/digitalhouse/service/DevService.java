package br.com.digitalhouse.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import br.com.digitalhouse.exception.DevNotFoundException;
import br.com.digitalhouse.model.Dev;
import br.com.digitalhouse.repository.CityRepository;
import br.com.digitalhouse.repository.DevRepository;
import br.com.digitalhouse.repository.StateRepository;

@Service
public class DevService {
	
	@Autowired
	private DevRepository repository;
	
	@Autowired 
	private StateRepository stateRepository;
	
	@Autowired 
	private CityRepository cityRepository;
	
	@GetMapping
	public List<Dev> getAllDevs() {
		return repository.findAll();
	}

	public Optional<Dev> getDevByID(Long id) {
		return repository.findById(id);
	}
	
	@Transactional
	public void addDev(Dev dev) {
		
		stateRepository.save(dev.getLocation().getCity().getState());
		cityRepository.save(dev.getLocation().getCity());
		repository.save(dev);
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
