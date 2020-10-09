import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDevComponent } from './cadastro-dev.component';

describe('CadastroDevComponent', () => {
  let component: CadastroDevComponent;
  let fixture: ComponentFixture<CadastroDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
