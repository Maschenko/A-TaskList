import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNewBarComponent } from './side-new-bar.component';

describe('SideNewBarComponent', () => {
  let component: SideNewBarComponent;
  let fixture: ComponentFixture<SideNewBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNewBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNewBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
