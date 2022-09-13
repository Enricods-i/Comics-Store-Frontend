import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCatalogComponent } from './navigation-catalog.component';

describe('NavigationCatalogComponent', () => {
  let component: NavigationCatalogComponent;
  let fixture: ComponentFixture<NavigationCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
