import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.scss'],
  standalone:false
})
export class TarifasComponent  implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {}
  openSuscripcion(plan: string) {
    console.log(`Navegando a suscripción del plan: ${plan}`);
    this.router.navigate(['/suscripcion', plan]);
  }

}
