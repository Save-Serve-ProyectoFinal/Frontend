import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EmpresaRegistroModalComponent } from '../../components/empresa-registro-modal/empresa-registro-modal.component'; 

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.scss'],
  standalone:false
})
export class TarifasComponent  implements OnInit {
  

  constructor(private router: Router,private modalController: ModalController) { }

  ngOnInit() {}
  openSuscripcion(plan: string) {
    console.log(`Navegando a suscripción del plan: ${plan}`);
    this.router.navigate(['/suscripcion', plan]);
  }
  async openRegister() {
    // You would implement your registration modal here
    // This is a placeholder for the offcanvas functionality from Bootstrap
    const modal = await this.modalController.create({
      component: EmpresaRegistroModalComponent, // You would need to create this component
      cssClass: 'register-modal'
    });
    return await modal.present();
  }

}
