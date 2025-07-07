import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemEditState } from './todo-item-edit-state';

describe('TodoItemEditState', () => {
  let component: TodoItemEditState;
  let fixture: ComponentFixture<TodoItemEditState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemEditState]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoItemEditState);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
