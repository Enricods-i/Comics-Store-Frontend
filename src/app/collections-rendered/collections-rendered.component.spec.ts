import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsRenderedComponent } from './collections-rendered.component';

describe('CollectionsRenderedComponent', () => {
  let component: CollectionsRenderedComponent;
  let fixture: ComponentFixture<CollectionsRenderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsRenderedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsRenderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
