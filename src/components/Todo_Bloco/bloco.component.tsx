import React from 'react';
import Todo_Card from '../Todo_Card/todo.component';
import { BlocoProps } from './interface/bloco.interface';

const Todo_Bloco: React.FC<BlocoProps> = ({ titulo, todos, onDrop, onDragOver, onDragStart, blocoIndex, abrirModal }) => {
  return (
    <section
      className="w-2/3 md:w-2/5 lg:w-1/4 flex flex-col rounded-lg overflow-hidden shadow-lg shadow-[#00000040]"
      onDrop={(e) => onDrop(e as React.DragEvent<HTMLDivElement>, blocoIndex)}
      onDragOver={onDragOver}
    >

      <h2 className="w-full rounded-t-xl bg-emerald-300 h-16 flex justify-center items-center border-[5px] border-b-0 border-gray-700 text-gray-700 text-3xl font-semibold tracking-wider shadow-md">
        {titulo}
      </h2>
      
      <ul className="bg-gray-700 lg:h-[70vh] min-h-[50vh] lg:px-10 px-4 py-4 flex flex-col gap-8">
        {todos.map((todo, index) => (
          <Todo_Card
            key={todo.texto}
            todo={todo}
            index={index}
            onDragStart={onDragStart}
            abrirModal={abrirModal}
          />
        ))}
      </ul>
    </section>
  );
};

export default Todo_Bloco;
