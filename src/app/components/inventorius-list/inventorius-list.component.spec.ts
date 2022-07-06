import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoriusListComponent } from './inventorius-list.component';

describe('InventoriusListComponent', () => {
  let component: InventoriusListComponent;
  let fixture: ComponentFixture<InventoriusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoriusListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoriusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
