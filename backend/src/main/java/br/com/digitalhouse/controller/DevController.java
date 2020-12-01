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

import br.com.digitalhouse.dto.DevDTO;
import br.com.digitalhouse.filter.DevFilter;
import br.com.digitalhouse.model.Dev;
import br.com.digitalhouse.request.DevRequest;
import br.com.digitalhouse.service.DevService;

@CrossOrigin
@RestController
@RequestMapping("/dev")
public class DevController {

	@Autowired
	private DevService service;
	

	@GetMapping
	public List<Dev> getAllDevs(DevFilter filter) {
		return service.getAllDevs(filter);
	}

	
	@GetMapping("/{id}")
	public ResponseEntity<Dev> getDevByID(@PathVariable Long id) {
		Optional<Dev> dev = service.getDevByID(id);

		if (dev.isPresent()) {
			return ResponseEntity.ok(dev.get());
		}

		return ResponseEntity.notFound().build();
	}

	
	@PostMapping
	public ResponseEntity<?> addDev(@RequestBody @Valid DevRequest request) {
		try {
			DevDTO dev = service.addDev(request);
			return ResponseEntity.status(HttpStatus.CREATED).body(dev);
		} catch (Exception ex) {
			return ResponseEntity.badRequest().body(ex.getMessage());
		}
	}

	
	@DeleteMapping("/{id}")
	public ResponseEntity<Dev> deleteDevByID(@PathVariable Long id) {
		try {
			service.deleteDevByID(id);
			return ResponseEntity.noContent().build();

		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}
	}

	
	//FIXME: o put não funciona
	@PutMapping("/{id}")
	public ResponseEntity<?> setDevByID(@PathVariable Long id, @RequestBody @Valid Dev dev) {

		Dev currentDev = service.getDevByID(id).orElse(null);

		if (currentDev != null) {
			BeanUtils.copyProperties(dev, currentDev, "id");
			service.setDevByID(currentDev);
			return ResponseEntity.ok(currentDev);
		}

		return ResponseEntity.notFound().build();
	}

}
