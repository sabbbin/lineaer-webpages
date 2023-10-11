import { useState } from 'react';
import TodoColumn from '../components/todoCard/todoColumn';
import { useBoardStore } from '../components/zustand';
import { todo } from '../data';

export default function DragDrop() {
  const selectdrag = useBoardStore((state) => state.draggingCard);
  const [tempStore, setTempStore] = useState(todo);

  const handleDrop = (
    groupName: string,

    insertPosition: number
  ) => {
    console.log('chaning  position', selectdrag);
    const temp = [...todo];

    temp.filter((a) => {
    a.children:  [...a.children].filter((b) => {
        if (b.name !== selectdrag) {
          return true;
        }
        console.log('false', b.name);
        return false;
      });
    });

    console.log('testing', temp);

    temp.filter((a) => {
      if (a.name == groupName) {
        a.children.splice(insertPosition, 0, { name: selectdrag });
      }
    });
    console.log('temp', temp);
    setTempStore(temp);
  };

  return (
    <>
      helo this is sabin
      {/* <p> {JSON.stringify(todo)}</p> */}
      <div className="flex space-x-5">
        {tempStore.map((to, id) => (
          <TodoColumn key={id} todo={to} handleDrop={handleDrop} />
        ))}
      </div>
    </>
  );
}
