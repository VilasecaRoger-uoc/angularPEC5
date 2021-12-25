import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonatgaComponent } from './personatga.component';

describe('PersonatgaComponent', () => {
  let component: PersonatgaComponent;
  let fixture: ComponentFixture<PersonatgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonatgaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonatgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
