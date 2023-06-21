import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicCardComponent } from './pic-card.component';

describe('PicCardComponent', () => {
  let component: PicCardComponent;
  let fixture: ComponentFixture<PicCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicCardComponent]
    });
    fixture = TestBed.createComponent(PicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
