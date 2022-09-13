import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSearchBarComponent } from './collection-search-bar.component';

describe('CollectionSearchBarComponent', () => {
  let component: CollectionSearchBarComponent;
  let fixture: ComponentFixture<CollectionSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
