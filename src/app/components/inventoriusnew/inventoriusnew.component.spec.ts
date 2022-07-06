import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoriusnewComponent } from './inventoriusnew.component';

describe('InventoriusnewComponent', () => {
  let component: InventoriusnewComponent;
  let fixture: ComponentFixture<InventoriusnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoriusnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoriusnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
