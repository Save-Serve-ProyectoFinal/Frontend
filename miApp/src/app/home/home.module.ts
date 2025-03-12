import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { CarouselComponent } from '../components/carousel/carousel.component';
import { HowWorksComponent } from '../components/how-works/how-works.component';
import { FeatureComponent } from '../components/feature/feature.component';


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
    LoginmodalComponent,
    CarouselComponent,
    HowWorksComponent,
    FeatureComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
