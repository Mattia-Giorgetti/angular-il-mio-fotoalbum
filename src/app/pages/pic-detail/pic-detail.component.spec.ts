import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicDetailComponent } from './pic-detail.component';

describe('PicDetailComponent', () => {
  let component: PicDetailComponent;
  let fixture: ComponentFixture<PicDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicDetailComponent]
    });
    fixture = TestBed.createComponent(PicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
