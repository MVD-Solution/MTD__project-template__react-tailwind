import { TodoTypes } from '@custom-types/todo';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import TodoCard from '.';

describe('<TodoCard', () => {
  const mockTodo: TodoTypes = { id: '1', title: 'Test todo', userId: '1', completed: false };
  it('should render todo title', () => {
    const { getByTestId } = render(
      <TodoCard
        id={mockTodo.id}
        title={mockTodo.title}
        completed={mockTodo.completed}
        onSwitch={() => {
          return true;
        }}
      />
    );
    const todoTitle = getByTestId('todo-1');
    expect(todoTitle).toHaveTextContent(mockTodo.title);
  });

  it('should switch todo state when click', () => {
    const mockSwitchFn = jest.fn();
    const { getByTestId } = render(
      <TodoCard
        id={mockTodo.id}
        title={mockTodo.title}
        completed={mockTodo.completed}
        onSwitch={mockSwitchFn}
      />
    );
    const todoLabel = getByTestId('todo-label-1');
    fireEvent.click(todoLabel);
    expect(mockSwitchFn).toHaveBeenCalled();
  });
});
