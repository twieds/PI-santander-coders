package br.com.digitalhouse.mapper;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.digitalhouse.dto.DevDTO;
import br.com.digitalhouse.model.Dev;
import br.com.digitalhouse.request.DevRequest;

@Component
public class DevMapper {

    @Autowired
    private ModelMapper modelMapper;

    public DevDTO modelToDto(Dev dev) {
        return modelMapper.map(dev, DevDTO.class);
    }

    public Dev dtoRequestToModel(DevRequest request) {
        return modelMapper.map(request, Dev.class);
    }
}
