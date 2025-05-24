import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZonaArticulosPage } from './zona-articulos.page';

describe('ZonaArticulosPage', () => {
  let component: ZonaArticulosPage;
  let fixture: ComponentFixture<ZonaArticulosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaArticulosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
