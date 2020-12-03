package br.com.digitalhouse.mapper;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.digitalhouse.dto.ProjectDTO;
import br.com.digitalhouse.model.Project;
import br.com.digitalhouse.request.ProjectRequest;

@Component
public class ProjectMapper {
	@Autowired
	private ModelMapper modelMapper;
	
	public ProjectDTO modelToDto(Project project) {
	    return modelMapper.map(project, ProjectDTO.class);
	}
	
	public Project dtoRequestToModel(ProjectRequest request) {
	    return modelMapper.map(request, Project.class);
	}
}
