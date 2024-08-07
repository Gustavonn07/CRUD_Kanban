import React from 'react';
import { TodoProps } from './interface/todo.interface';

const Todo_Card: React.FC<TodoProps> = ({ todo, index, onDragStart }) => {
  
  return (
    <li
      draggable
      onDragStart={(e) => onDragStart(e as React.DragEvent<HTMLLIElement>, index)}
      className="w-full py-2 bg-gray-100 text-gray-600 h-[7rem] flex flex-col justify-between shadow-lg rounded-md cursor-pointer duration-200 hover:-translate-y-1"
    >

      <div className="flex justify-between px-4 items-center">
        <h4 className="text-2xl font-medium">{todo.texto}</h4>
        <img src={todo.imagem} alt="Imagem do desenvolvedor" className="w-12 h-12 rounded-full"/>
      </div>

      <div className="text-lg flex gap-1 px-4 items-center self-end">
        <p>{todo.data},</p>
        <p>{todo.horario}</p>
      </div>
    </li>
  );
};

export default Todo_Card;
