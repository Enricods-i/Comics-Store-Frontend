import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListsPageComponent } from './wish-lists-page.component';

describe('WishListsPageComponent', () => {
  let component: WishListsPageComponent;
  let fixture: ComponentFixture<WishListsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishListsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishListsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
