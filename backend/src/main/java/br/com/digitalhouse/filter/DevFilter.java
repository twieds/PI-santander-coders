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
public class DevFilter {
   
    private Long city;
    private Long state;
    private Set<Long> devSkills; 
    private Set<Long> devPractice;
    
}