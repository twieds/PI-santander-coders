package br.com.digitalhouse.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import lombok.Data;
import lombok.EqualsAndHashCode;

//@Data
//@EqualsAndHashCode(onlyExplicitlyIncluded = true)
//@Entity
public class Group {

//	@EqualsAndHashCode.Include
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long id;
//	
//	@Column(nullable = false)
//	private String name;
//	
//	@ManyToMany
//	@JoinTable(name = "group_permission", joinColumns = @JoinColumn(name = "group_id"),
//			inverseJoinColumns = @JoinColumn(name = "permission_id"))
//	private Set<Permission> permissions = new HashSet<>();
	
}