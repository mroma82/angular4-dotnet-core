import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1ListingComponent } from './app1-listing.component';

describe('App1ListingComponent', () => {
  let component: App1ListingComponent;
  let fixture: ComponentFixture<App1ListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1ListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
