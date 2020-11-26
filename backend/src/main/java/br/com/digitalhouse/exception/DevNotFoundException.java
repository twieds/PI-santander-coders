package br.com.digitalhouse.exception;

public class DevNotFoundException extends EntityNotFoundException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public DevNotFoundException(String message) {
		super(message);		
	}

	public DevNotFoundException(Long id) {
		this(String.format("Não existe um cadastro de dev com código %d", id));
	}
}
