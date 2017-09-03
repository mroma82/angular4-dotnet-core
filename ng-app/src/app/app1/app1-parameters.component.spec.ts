import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1ParametersComponent } from './app1-parameters.component';

describe('App1ParametersComponent', () => {
  let component: App1ParametersComponent;
  let fixture: ComponentFixture<App1ParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1ParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1ParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
