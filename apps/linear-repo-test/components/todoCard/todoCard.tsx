import React from 'react';
import { useBoardStore } from '../zustand';

export default function TodoCard({ name }: { name: { name: string } }) {
  const setDraggable = useBoardStore((a) => a.setDraggingCard);
  return (
    <div
      draggable
      onDragStart={() => setDraggable(name.name)}
      onDragEnd={() => setDraggable(null)}
      className="p- bg-white-a08 "
    >
      <h3> {name.name}</h3>
    </div>
  );
}
