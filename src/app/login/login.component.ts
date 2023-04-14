import {Component} from '@angular/core';
import {Usuario} from "../shared/usuario-model";
import {TokenStorageService} from "../token/token-storage.service";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  usuario: Usuario = { email: "", senha: ""};
  constructor(private loginService: LoginService, private tokenStorage: TokenStorageService) {
  }

  onSubmit() {
    this.loginService.login(this.usuario).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
