import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPnrComponent } from './add-new-pnr.component';

describe('AddNewPnrComponent', () => {
  let component: AddNewPnrComponent;
  let fixture: ComponentFixture<AddNewPnrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPnrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewPnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
