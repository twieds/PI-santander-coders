import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDevsComponent } from './lista-devs.component';

describe('ListaDevsComponent', () => {
  let component: ListaDevsComponent;
  let fixture: ComponentFixture<ListaDevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDevsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
