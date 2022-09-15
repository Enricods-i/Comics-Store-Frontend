import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicRenderedComponent } from './comic-rendered.component';

describe('ComicRenderedComponent', () => {
  let component: ComicRenderedComponent;
  let fixture: ComponentFixture<ComicRenderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicRenderedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicRenderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
