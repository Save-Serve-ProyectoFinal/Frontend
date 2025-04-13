import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/autentificacion/auth.service';

import { ModalController, MenuController, IonicModule } from '@ionic/angular';
import { EmpresaRegistroModalComponent } from '../empresa-registro-modal/empresa-registro-modal.component';
import { BeneficiarioRegistroModalComponent } from '../beneficiario-registro-modal/beneficiario-registro-modal.component';
import { Router } from '@angular/router';
import { LoginmodalComponent } from '../loginmodal/loginmodal.component';

@Component({
  selector: 'app-registro-opciones-modal',
  templateUrl: './registro-opciones-modal.component.html',
  styleUrls: ['./registro-opciones-modal.component.scss'],

  standalone: false
})
export class RegistroOpcionesModalComponent implements OnInit {

  donanteLoading: boolean = false;
  beneficiarioLoading: boolean = false;
  modalController: any;

  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private modalCtrl: ModalController
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closeMenu() {
    this.modalCtrl.dismiss();
  }

  openDonarRegistration() {
    this.donanteLoading = true;
    // Simulación de carga
    setTimeout(() => {
      this.donanteLoading = false;
      this.menuCtrl.close();
      this.router.navigate(['/registro-donante']);
    }, 500);
  }

  openBeneficiarioRegistration() {
    this.beneficiarioLoading = true;
    // Simulación de carga
    setTimeout(() => {
      this.beneficiarioLoading = false;
      this.menuCtrl.close();
      this.router.navigate(['/registro-beneficiario']);
    }, 500);
  }


  async backToLogin() {
    const modal = await this.modalCtrl.create({
      component: LoginmodalComponent,
      cssClass: 'auth-modal'
    });
    await modal.present();
  }
}


