import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome01Component } from './page-home01.component';

describe('PageHome01Component', () => {
  let component: PageHome01Component;
  let fixture: ComponentFixture<PageHome01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHome01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
