import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  public loginForm : FormGroup;
  constructor(private router: Router,private formBuilder:FormBuilder, private userService: UserService, private toastControler: ToastController) {
    this.loginForm = this.formBuilder.group({
      mail: ['',Validators.required],
      pass: ['',Validators.required],
      
    });
   }
   

  public async login() {
    console.log(this.loginForm.value.mail);
    if(this.userService.validateUser(this.loginForm.value.mail,this.loginForm.value.pass)){
      this.router.navigate(['/home/tabs/tab1']);
    }else{
      const toast = await this.toastControler.create({
        message: 'Usuario o contraseña incorrectos',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      toast.present();
    }
  }

}
