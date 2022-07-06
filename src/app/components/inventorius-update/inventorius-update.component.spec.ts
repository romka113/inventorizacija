import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoriusUpdateComponent } from './inventorius-update.component';

describe('InventoriusUpdateComponent', () => {
  let component: InventoriusUpdateComponent;
  let fixture: ComponentFixture<InventoriusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoriusUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoriusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
