import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaffaComponent } from './jaffa.component';

describe('JaffaComponent', () => {
  let component: JaffaComponent;
  let fixture: ComponentFixture<JaffaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaffaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaffaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
