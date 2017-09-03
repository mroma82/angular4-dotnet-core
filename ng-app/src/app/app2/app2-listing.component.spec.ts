import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2ListingComponent } from './app2-listing.component';

describe('App2ListingComponent', () => {
  let component: App2ListingComponent;
  let fixture: ComponentFixture<App2ListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2ListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
