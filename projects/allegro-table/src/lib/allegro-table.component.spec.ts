import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegroTableComponent } from './allegro-table.component';

describe('AllegroTableComponent', () => {
  let component: AllegroTableComponent;
  let fixture: ComponentFixture<AllegroTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllegroTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllegroTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
