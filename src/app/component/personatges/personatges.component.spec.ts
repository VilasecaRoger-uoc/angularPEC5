import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonatgesComponent } from './personatges.component';

describe('PersonatgesComponent', () => {
  let component: PersonatgesComponent;
  let fixture: ComponentFixture<PersonatgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonatgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonatgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
