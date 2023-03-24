import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellAuthComponent } from './sell-auth.component';

describe('SellAuthComponent', () => {
  let component: SellAuthComponent;
  let fixture: ComponentFixture<SellAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
