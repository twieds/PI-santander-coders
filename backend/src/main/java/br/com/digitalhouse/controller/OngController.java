package br.com.digitalhouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.digitalhouse.model.Ong;
import br.com.digitalhouse.service.OngService;

@CrossOrigin
@RestController
@RequestMapping("/ong")
public class OngController {
	
	@Autowired
	private OngService service;
	
	@GetMapping
	public List<Ong> getAllOngs() {
		return service.getAllOngs();
	}
	
	@GetMapping("/{id}")
	public Ong getOngByID(@PathVariable Long id) {
		return service.getOngByID(id);
	}
	
	@PostMapping
	public void addOng(@RequestBody Ong ong) {
		service.addOng(ong);
	}
	
	@DeleteMapping("/{id}")
	public void deleteOngByID(@PathVariable Long id) {
		service.deleteOngByID(id);
	}
	
	@PutMapping("/{id}")
	public void setOngByID(@PathVariable Long id, @RequestBody Ong ong) {
		service.setOngByID(id, ong);
	}

}

