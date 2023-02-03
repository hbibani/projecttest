import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemComponentComponent } from './user-item-component.component';

describe('UserItemComponentComponent', () => {
  let component: UserItemComponentComponent;
  let fixture: ComponentFixture<UserItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserItemComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
