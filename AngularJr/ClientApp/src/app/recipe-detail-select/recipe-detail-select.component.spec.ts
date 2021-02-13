import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailSelectComponent } from './recipe-detail-select.component';

describe('RecipeDetailSelectComponent', () => {
  let component: RecipeDetailSelectComponent;
  let fixture: ComponentFixture<RecipeDetailSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
