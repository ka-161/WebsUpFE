import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTaskList } from './sub-task-list';

describe('SubTaskList', () => {
  let component: SubTaskList;
  let fixture: ComponentFixture<SubTaskList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubTaskList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTaskList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
