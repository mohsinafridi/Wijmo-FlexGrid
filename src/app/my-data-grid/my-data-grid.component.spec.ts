import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataGridComponent } from './my-data-grid.component';

describe('MyDataGridComponent', () => {
  let component: MyDataGridComponent;
  let fixture: ComponentFixture<MyDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
