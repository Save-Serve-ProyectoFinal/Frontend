import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../services/autentificacion/auth.service';


@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.scss'],
})
export class LoginmodalComponent  implements OnInit {

  loginData = {
    email: '',
    password: ''
  };

  constructor(
    private modalController: ModalController,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onLogin() {
    this.authService.login(this.loginData.email, this.loginData.password)
      .subscribe({
        next: (response: any) => {
          this.modalController.dismiss({ loggedIn: true });
        },
        error: (error: any) => {
          console.error('Error de inicio de sesión', error);
          this.presentToast('Error al iniciar sesión. Compruebe sus credenciales.', 'danger');
        }
      });
  }

  async presentToast(message: string, color: string = 'success') {
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = 2000;
    toast.color = color;
    toast.position = 'bottom';

    document.body.appendChild(toast);
    return toast.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  presentForgotPasswordModal() {
    this.modalController.dismiss();
    // Lógica para mostrar el modal de recuperación de contraseña
  }

  presentRegisterOptions() {
    this.modalController.dismiss();
    // Lógica para mostrar el modal de opciones de registro
  }

}
