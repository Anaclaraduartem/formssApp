import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './../models/Usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formRegistro: FormGroup;
  usuario: Usuario = new Usuario();

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'o campo  nome é obrigatório!' },
      {
        tipo: 'minlenght',
        mensagem: 'O Campo nome precisa ter pelo menos 3 caracteres!',
      },
    ],
    cpf: [{ tipo: 'required', mensagem: 'O campo CPF é obrigatório.' }],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      {
        tipo: 'minlength',
        mensagem: 'A senha deve ter pelo menos 6 caracteres.',
      },
      {
        tipo: 'maxlength',
        mensagem: 'A senha deve ter no máximo 8 caractéres.',
      },
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      {
        tipo: 'minlength',
        mensagem: 'A senha deve ter pelo menos 6 caracteres.',
      },
      {
        tipo: 'maxlength',
        mensagem: 'A senha deve ter no máximo 8 caractéres.',
      },
    ],
  };

  constructor(private formBuilder: FormBuilder, private storageService: StorageService,private route: Router) {
    this.formRegistro = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      cpf: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
        ]),
      ],
      confirmaSenha: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
        ]),
      ],
    });
  }

  ngOnInit() {}

  async salvarRegistro() {
   if(this.formRegistro.valid){
    this.usuario.nome = this.formRegistro.value.nome;
    this.usuario.cpf = this.formRegistro.value.cpf;
    this.usuario.email = this.formRegistro.value.email;
    this.usuario.senha = this.formRegistro.value.senha;
    await this.storageService.set(this.usuario.email, this.usuario);
    this.route.navigateByUrl('/tabs/tab2');
   } else{
     alert('Formulário Inválido!');
   }
  }
}
