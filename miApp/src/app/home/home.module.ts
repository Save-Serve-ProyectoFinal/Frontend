import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginmodalComponent } from '../components/loginmodal/loginmodal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    
  ],
  declarations: [
    HomePage,
    HeroSectionComponent,
    NavbarComponent,
    LoginmodalComponent
  ]
})
export class HomePageModule {}
