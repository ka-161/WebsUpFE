import { ComponentFixture, TestBed } from '@angular/core/testing';

import * as userTemplateDetail from './user-template-detail';

describe('UserTemplateDetail', () => {
  let component: userTemplateDetail.UserTemplateDetail;
  let fixture: ComponentFixture<userTemplateDetail.UserTemplateDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [userTemplateDetail.UserTemplateDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(userTemplateDetail.UserTemplateDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
