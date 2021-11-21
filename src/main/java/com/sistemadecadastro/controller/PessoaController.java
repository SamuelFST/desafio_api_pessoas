package com.sistemadecadastro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sistemadecadastro.model.Pessoa;
import com.sistemadecadastro.repository.PessoaRepository;

@RestController
@RequestMapping("/pessoas")
public class PessoaController {
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@GetMapping()
	public ResponseEntity<?> listarPessoas() {
		if(pessoaRepository.findAll().isEmpty()) {
			return new ResponseEntity<>("Nenhum cadastro de pessoa salvo", HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(pessoaRepository.findAll(), HttpStatus.OK);
		}
	}
	
	@GetMapping("/buscarpessoa")
	public ResponseEntity<Pessoa> listarPessoa(@RequestParam Integer id){
		Pessoa pessoa = pessoaRepository.findById(id).get();
		return new ResponseEntity<Pessoa>(pessoa, HttpStatus.OK);
	}
	
	@PostMapping("/adicionar")
	public ResponseEntity<?> adicionarPessoa(@RequestBody Pessoa pessoa) {
		pessoaRepository.save(pessoa);
		return new ResponseEntity<>("Pessoa cadastrada com sucesso", HttpStatus.CREATED);
	}
	
	@DeleteMapping("/remover")
	public ResponseEntity<?> excluirPessoa(@RequestParam Integer id) {
		if(pessoaRepository.existsById(id) == true) {
			pessoaRepository.deleteById(id);
			return new ResponseEntity<>("Pessoa removida com sucesso", HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("ID não cadastrado no banco de dados", HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/atualizar")
	public ResponseEntity<?> atualizarPessoa(@RequestBody Pessoa pessoa) {
		if(pessoaRepository.existsById(pessoa.getId()) == true) {
			pessoaRepository.saveAndFlush(pessoa);
			return new ResponseEntity<>("Pessoa atualizada", HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>("O ID informado não está cadastrado no banco de dados", HttpStatus.NOT_FOUND);
		}
	}
}
