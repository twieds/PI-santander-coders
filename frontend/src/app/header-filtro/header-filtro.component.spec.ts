import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFiltroComponent } from './header-filtro.component';

describe('HeaderFiltroComponent', () => {
  let component: HeaderFiltroComponent;
  let fixture: ComponentFixture<HeaderFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
