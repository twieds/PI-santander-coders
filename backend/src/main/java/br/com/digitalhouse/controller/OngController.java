package br.com.digitalhouse.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.digitalhouse.dto.OngDTO;
import br.com.digitalhouse.filter.OngFilter;
import br.com.digitalhouse.model.Ong;
import br.com.digitalhouse.request.OngRequest;
import br.com.digitalhouse.service.OngService;

@CrossOrigin
@RestController
@RequestMapping("/ong")
public class OngController {
	
	@Autowired
	private OngService service;
	
	@GetMapping
	public List<Ong> getAllOngs(OngFilter filter) {
		return service.getAllOngs(filter);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Ong> getOngByID(@PathVariable Long id) {
		Optional<Ong> ong = service.getOngByID(id);

		if (ong.isPresent()) {
			return ResponseEntity.ok(ong.get());
		}

		return ResponseEntity.notFound().build();
	}

	@PostMapping
	public ResponseEntity<?> addOng(@RequestBody @Valid OngRequest request) {
		try {
			OngDTO ong = service.addOng(request);
			return ResponseEntity.status(HttpStatus.CREATED).body(ong);
		} catch (Exception ex) {
			return ResponseEntity.badRequest().body(ex.getMessage());
		}
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Ong> deleteOngByID(@PathVariable Long id) {
		try {
			service.deleteOngByID(id);
			return ResponseEntity.noContent().build();

		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}
	}

	
	//FIXME: o put não funciona
	@PutMapping("/{id}")
	public ResponseEntity<?> setOngByID(@PathVariable Long id, @RequestBody @Valid Ong ong) {

		Ong currentOng = service.getOngByID(id).orElse(null);

		if (currentOng != null) {
			BeanUtils.copyProperties(ong, currentOng, "id");
			service.setOngByID(currentOng);
			return ResponseEntity.ok(currentOng);
		}

		return ResponseEntity.notFound().build();
	}
}

