import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BringYourOwnFilesComponent } from './bring-your-own-files.component';

describe('BringYourOwnFilesComponent', () => {
  let component: BringYourOwnFilesComponent;
  let fixture: ComponentFixture<BringYourOwnFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BringYourOwnFilesComponent]
    });
    fixture = TestBed.createComponent(BringYourOwnFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
