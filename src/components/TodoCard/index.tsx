import Checkbox from '@components/Checkbox/Checkbox';
type TodoCardProps = {
  completed: boolean;
  title: string;
  id: string;
  onSwitch: () => void;
};

const TodoCard = ({ completed, title, id, onSwitch }: TodoCardProps) => {
  return (
    <div
      data-testid={`todo-${id}`}
      className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg flex gap-2 items-center"
    >
      <Checkbox variant="success" checked={completed} id={id} onChange={onSwitch} />
      <label htmlFor={id} data-testid={`todo-label-${id}`}>
        {title}
      </label>
    </div>
  );
};

export default TodoCard;
