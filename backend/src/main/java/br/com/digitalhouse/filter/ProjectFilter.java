package br.com.digitalhouse.filter;

import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProjectFilter {
	
	private Long state;
	private Long city;
	private Set<Long> projectSkills; 
}
