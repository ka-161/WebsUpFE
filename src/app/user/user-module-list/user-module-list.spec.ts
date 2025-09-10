import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModuleList } from './user-module-list';

describe('UserModuleList', () => {
  let component: UserModuleList;
  let fixture: ComponentFixture<UserModuleList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserModuleList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserModuleList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
