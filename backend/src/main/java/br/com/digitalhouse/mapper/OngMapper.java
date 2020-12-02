package br.com.digitalhouse.mapper;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.digitalhouse.dto.OngDTO;
import br.com.digitalhouse.model.Ong;
import br.com.digitalhouse.request.OngRequest;

@Component
public class OngMapper {

	@Autowired
	private ModelMapper modelMapper;
	
	public OngDTO modelToDto(Ong ong) {
	    return modelMapper.map(ong, OngDTO.class);
	}
	
	public Ong dtoRequestToModel(OngRequest request) {
	    return modelMapper.map(request, Ong.class);
	}
}

