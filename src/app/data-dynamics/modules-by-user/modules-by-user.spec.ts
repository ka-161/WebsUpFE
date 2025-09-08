import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesByUser } from './modules-by-user';

describe('ModulesByUser', () => {
  let component: ModulesByUser;
  let fixture: ComponentFixture<ModulesByUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesByUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulesByUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
