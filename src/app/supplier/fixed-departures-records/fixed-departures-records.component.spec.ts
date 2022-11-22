import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDeparturesRecordsComponent } from './fixed-departures-records.component';

describe('FixedDeparturesRecordsComponent', () => {
  let component: FixedDeparturesRecordsComponent;
  let fixture: ComponentFixture<FixedDeparturesRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedDeparturesRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedDeparturesRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
