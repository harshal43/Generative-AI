import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGPTPlaygroundComponent } from './chat-gpt-playground.component';

describe('ChatGPTPlaygroundComponent', () => {
  let component: ChatGPTPlaygroundComponent;
  let fixture: ComponentFixture<ChatGPTPlaygroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatGPTPlaygroundComponent]
    });
    fixture = TestBed.createComponent(ChatGPTPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
