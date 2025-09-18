import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplateList } from './user-template-list';

describe('UserTemplateList', () => {
  let component: UserTemplateList;
  let fixture: ComponentFixture<UserTemplateList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTemplateList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTemplateList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
