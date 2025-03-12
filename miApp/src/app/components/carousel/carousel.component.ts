import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { register } from 'swiper/element/bundle';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone:false
})
export class CarouselComponent implements OnInit, AfterViewInit {
  
  constructor(private el: ElementRef) {
    // Registrar los elementos de Swiper
    register();
  }
  
  ngOnInit() {}
  
  ngAfterViewInit() {
    // Esperar a que el DOM esté completamente cargado
    setTimeout(() => {
      this.initSwiper();
    }, 0);
  }
  
  initSwiper() {
    const swiperEl = this.el.nativeElement.querySelector('swiper-container');
    
    if (swiperEl) {
      // Configuración explícita del objeto Swiper
      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          clickable: true,
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        effect: 'slide',
        speed: 800
      };
      
      // Asignar parámetros como atributos de datos
      Object.assign(swiperEl, swiperParams);
      
      // Crear elementos de navegación dinámicamente
      const prevButton = document.createElement('div');
      prevButton.className = 'swiper-button-prev';
      
      const nextButton = document.createElement('div');
      nextButton.className = 'swiper-button-next';
      
      const pagination = document.createElement('div');
      pagination.className = 'swiper-pagination';
      
      // Añadir elementos al contenedor
      swiperEl.appendChild(prevButton);
      swiperEl.appendChild(nextButton);
      swiperEl.appendChild(pagination);
      
      // Inicializar Swiper explícitamente
      swiperEl.initialize();
      
      // Verificar que el autoplay está activado comprobando la instancia de Swiper
      const swiperInstance = swiperEl.swiper;
      if (swiperInstance && !swiperInstance.autoplay.running) {
        console.log('Iniciando autoplay manualmente');
        swiperInstance.autoplay.start();
      }
    }
  }
}