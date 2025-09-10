import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModuleDetail } from './user-module-detail';

describe('UserModuleDetail', () => {
  let component: UserModuleDetail;
  let fixture: ComponentFixture<UserModuleDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserModuleDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserModuleDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
