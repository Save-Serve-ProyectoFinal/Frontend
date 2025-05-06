import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { GeocodingService } from '../../services/geocoding-service.service';
import { BancoDeAlimentos } from 'src/app/models/bancoAlimentos.model';
import { BancoalimentosService } from 'src/app/services/bancoAlimentoService/bancoalimentos.service';
import { RespuestaPaginada } from 'src/app/services/empresaService/empresa.service';

@Component({
  selector: 'app-nuestros-donantes',
  templateUrl: './nuestros-donantes.page.html',
  styleUrls: ['./nuestros-donantes.page.scss'],
  standalone:false
})
export class NuestrosDonantesPage implements OnInit {
  private map: L.Map | null = null;
  private markersMap: Map<string, L.Marker> = new Map();
  bancos: BancoDeAlimentos[] = [];
  paginaActual = 0;
  totalPaginas = 0;
  tamanoPagina = 9;

  @ViewChild('mapSection') mapSection!: ElementRef;

  constructor(
    private geocodingService: GeocodingService,
    private bancoService: BancoalimentosService
  ) {
    console.log('Componente inicializado');
  }

  ngOnInit(): void {
    console.log('ngOnInit ejecutado');
    this.initMap();
    this.cargarBancos();
    this.cargarBancosPaginadas();

  }

  private initMap(): void {
    console.log('Inicializando mapa...');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    setTimeout(() => {
      this.map = L.map('mapa', { scrollWheelZoom: false }).setView([0, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      this.map.on('mouseover', () => {
        this.map?.scrollWheelZoom.enable();
      });
      this.map.on('mouseout', () => {
        this.map?.scrollWheelZoom.disable();
      });

      console.log('Mapa inicializado');
    }, 100);
  }

  private cargarBancos(): void {
    console.log('Iniciando carga de bancos...');
    this.bancoService.getAll().subscribe({
      next: (bancos) => {
        console.log('Bancos recibidos:', bancos);
        this.bancos = bancos;
        bancos.forEach(banco => {
          this.agregarMarcador(banco, false);
        });
      },
      error: (error) => {
        console.error('Error al cargar bancos de alimentos:', error);
      }
    });
  }

  obtenerYMostrarUbicacion(banco: BancoDeAlimentos): void {
    console.log('Ver en el mapa para:', banco);
    const key = banco.id ? banco.id.toString() : banco.nombre;
    if (this.markersMap.has(key)) {
      const marker = this.markersMap.get(key)!;
      const latlng = marker.getLatLng();
      this.map?.setView(latlng, 15);
      this.scrollToMap();
    } else {
      this.agregarMarcador(banco, true);
    }
  }
  private agregarMarcador(banco: BancoDeAlimentos, centrar: boolean): void {
    const key = banco.id ? banco.id.toString() : banco.nombre;
    this.geocodingService.obtenerCoordenadas(banco.direccion, banco.ciudad).subscribe({
      next: (coordenadas) => {
        if (coordenadas) {
          if (this.markersMap.has(key)) {
            if (centrar) {
              const marker = this.markersMap.get(key)!;
              this.map?.setView(marker.getLatLng(), 15);
              this.scrollToMap();
            }
            return;
          }
          const marker = L.marker([coordenadas.lat, coordenadas.lng])
            .addTo(this.map!)
            .bindPopup(`
              <div class="popup-content">
                <h6>${banco.nombre}</h6>
                <p>Haz click para más información</p>
              </div>
            `)
            .openPopup();
          this.markersMap.set(key, marker);
          console.log('Marcador agregado para:', banco);
          if (centrar) {
            setTimeout(() => {
              this.map?.setView([coordenadas.lat, coordenadas.lng], 15);
              this.scrollToMap();
            }, 300);
          }
        } else {
          console.error('No se pudieron obtener las coordenadas para:', banco.nombre);
        }
      },
      error: (error) => {
        console.error('Error al obtener coordenadas:', error);
      }
    });
  }

  scrollToMap(): void {
    if (this.mapSection) {
      setTimeout(() => {
        this.mapSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }
  private cargarBancosPaginadas(): void {
      this.bancoService.obtenerBancosPaginadas(this.paginaActual, this.tamanoPagina).subscribe({
        next: (respuesta: RespuestaPaginada<BancoDeAlimentos>) => {
          this.bancos = respuesta.content;
          this.totalPaginas = respuesta.totalPages;
          // Limpiar marcadores existentes
          this.markersMap.forEach(marker => marker.remove());
          this.markersMap.clear();
          // Agregar marcadores para las nuevas empresas
          this.bancos.forEach(bancos => {
            this.agregarMarcador(bancos, false);
          });
        },
        error: (error) => {
          console.error('Error al cargar empresas paginadas:', error);
        }
      });
    }
    arrayDePaginas(): number[] {
      // Si hay muchas páginas, puedes limitar cuántas se muestran
      const paginasAMostrar = 5;
      const arrayPaginas: number[] = [];
      
      let inicio = Math.max(1, this.paginaActual - Math.floor(paginasAMostrar / 2));
      let fin = Math.min(this.totalPaginas, inicio + paginasAMostrar - 1);
      
      // Ajustar el inicio si estamos cerca del final
      inicio = Math.max(1, fin - paginasAMostrar + 1);
      
      for (let i = inicio; i <= fin; i++) {
          arrayPaginas.push(i);
      }
      
      return arrayPaginas;
    }
      cambiarPagina(nuevaPagina: number): void {
        this.paginaActual = nuevaPagina;
        this.cargarBancosPaginadas();
      }
    
}