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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.digitalhouse.dto.OngDTO;
import br.com.digitalhouse.filter.OngFilter;
import br.com.digitalhouse.mapper.OngMapper;
import br.com.digitalhouse.model.Ong;
import br.com.digitalhouse.model.OngType;
import br.com.digitalhouse.model.Skill;
import br.com.digitalhouse.repository.CityRepository;
import br.com.digitalhouse.repository.OngRepository;
import br.com.digitalhouse.repository.OngTypeRepository;
import br.com.digitalhouse.repository.StateRepository;
import br.com.digitalhouse.request.OngRequest;

@Service
public class OngService {
	@Autowired
	private OngRepository repository;
	
	@Autowired
	private OngMapper mapper;
	
	@Autowired 
	private StateRepository stateRepository;
	
	@Autowired 
	private CityRepository cityRepository;
	
	@Autowired 
	private OngTypeRepository ongRepository;

	
	@GetMapping
	public List<Ong> getAllOngs(OngFilter filter) {
		
		List<OngType> ongTypes = ongRepository.findAll();
		Set<Long> ongTypesID = new HashSet<Long>();
		
		if (filter.getOngType() == null) {			
			
			for (OngType ongType: ongTypes) {				
				ongTypesID.add(ongType.getId());
			}
			
			filter.setOngType(ongTypesID);			
		}
		
		
		return repository.findAll(filter.getCity(), filter.getState(), filter.getOngType());
	}
	
	public Optional<Ong> getOngByID(Long id) {
		return repository.findById(id);
	}
	
	@Transactional
	public OngDTO addOng(OngRequest request) {
		Ong ong = mapper.dtoRequestToModel(request);
		
		if (ong.getLocation().getCity().getId() == null) {
			stateRepository.save(ong.getLocation().getCity().getState());
			cityRepository.save(ong.getLocation().getCity());			
		}
		
		return mapper.modelToDto(repository.save(ong));
	}
	
	@Transactional
	public void deleteOngByID(@PathVariable Long id) {
		
		try {
			repository.deleteById(id);
			repository.flush();
		
		} catch (EmptyResultDataAccessException e) {
			//TODO: EXCEPTION DA ONG
//			throw new DevNotFoundException(id);
		}	
	}
	
	@Transactional
	public void setOngByID(@PathVariable Long id, @RequestBody Ong ong) {

	}
	
	@Transactional
	public void setOngByID(Ong ong) {
		repository.save(ong);
	}
}
