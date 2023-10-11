import React from 'react';
import TodoCard from './todoCard';
import DragableComp from './dragableComp';

export default function TodoColumn({
  todo,
  handleDrop,
}: {
  todo: any;
  handleDrop: (
    groupName: string,

    insertPosition: number
  ) => void;
}) {
  return (
    <div className="bg-gray p-7 relative  rounded-lg">
      {/* <p>{JSON.stringify(todo)}</p> */}
      <h4>{todo.name}</h4>
      <div className="flex  flex-col space-y-5">
        <DragableComp drop={() => handleDrop(todo.name, 0)} />
        {todo.children.map((ch, id) => (
          <div key={id}>
            <TodoCard key={id} name={ch} />
            <DragableComp drop={() => handleDrop(todo.name, id + 1)} />
          </div>
        ))}
      </div>
    </div>
  );
}
