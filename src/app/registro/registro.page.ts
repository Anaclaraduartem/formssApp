import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

formRegistro: FormGroup;

mensagens={
  nome:[
    {tipo: 'required', mensagem:'o campo  NOME é obrigatório!'},
    {tipo:'minlenght', mensagem: 'O Campo NOME precisa ter pelo menos 3 caracteres!'}
  ],
  cpf: [
    { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
  ],
  email: [
    { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
    { tipo: 'email', mensagem: 'E-mail Inválido.' },
  ],
  senha: [
    { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
    { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
    { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
  ],
  confrimasenha: [
    { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
    { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
    { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
  ],
  };

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
     nome:['',Validators.compose([Validators.required,Validators.minLength(3)])],
     cpf: ['',Validators.compose([Validators.required])],
     email:['',Validators.compose([Validators.required,Validators.email])],
     senha:['',],
     confirmaSenha:['',Validators.compose([Validators.required,Validators.minLength(6)])]
    });
   }

  ngOnInit() {
  }
salvarRegistro(){
  console.log('Formulário: ',this.formRegistro.valid);
}
}
