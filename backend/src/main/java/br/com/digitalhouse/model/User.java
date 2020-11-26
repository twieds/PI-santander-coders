package br.com.digitalhouse.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import lombok.Data;

@Data
@Embeddable
public class User {
	
	@Column
	private String email;
	
	@Column
	private String password;
	
//	@Column(columnDefinition = "ENUM('admin', 'mod', 'dev', 'ong')")
//    @Enumerated(EnumType.STRING)
//    private Role role;
}
