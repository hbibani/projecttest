import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusageComponent } from './adminusage.component';

describe('AdminusageComponent', () => {
  let component: AdminusageComponent;
  let fixture: ComponentFixture<AdminusageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminusageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
