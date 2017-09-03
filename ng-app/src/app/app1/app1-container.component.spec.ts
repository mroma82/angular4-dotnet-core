import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1ContainerComponent } from './app1-container.component';

describe('App1ContainerComponent', () => {
  let component: App1ContainerComponent;
  let fixture: ComponentFixture<App1ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
