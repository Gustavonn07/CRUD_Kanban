import React, { useEffect, useState } from 'react';
import Todo_Bloco from './components/Todo_Bloco/bloco.component';
import Todo_Criador from './components/Todo_Criador/criador.component';
import { Todo } from './components/Todo_Card/interface/todo.interface';
import { Bloco } from './components/Todo_Bloco/interface/bloco.interface';
import { timeRefactor } from './utils/timeRefactor';

function App() {
  const [valorInput, setValorInput] = useState<string>('');
  const [blocos, setBlocos] = useState<Bloco[]>([
    { titulo: 'Em Pendência', todos: [] },
    { titulo: 'Tarefas', todos: [] },
    { titulo: 'Em Progresso', todos: [] },
    { titulo: 'Feito', todos: [] },
  ]);

  useEffect(() => {
    
    const blocosSalvos = localStorage.getItem('blocos');
    if (blocosSalvos) {
      setBlocos(JSON.parse(blocosSalvos));
    }
  }, []);

  useEffect(() => {

    localStorage.setItem('blocos', JSON.stringify(blocos));
  }, [blocos]);

  function handleCriar() {
    if (valorInput.trim()) {
      const novaTarefa: Todo = {
        texto: valorInput,
        imagem: 'https://avatars.githubusercontent.com/u/84361085?v=4',
        data: new Date().toLocaleDateString(),
        horario: timeRefactor(new Date().getHours() * 60 + new Date().getMinutes()),
      };

      setBlocos((blocosAnteriores) => {
        const blocosAtualizados = [...blocosAnteriores];
        blocosAtualizados[0].todos.push(novaTarefa);
        return blocosAtualizados;
      });

      setValorInput('');
    }
  }

  function handleDragStart(e: React.DragEvent<HTMLLIElement>, indexTarefa: number, indexBloco: number) {
    e.dataTransfer.setData('indexTarefa', indexTarefa.toString());
    e.dataTransfer.setData('indexBlocoOrigem', indexBloco.toString());
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>, indexBlocoDestino: number) {
    e.preventDefault();
    const indexTarefa = parseInt(e.dataTransfer.getData('indexTarefa'));
    const indexBlocoOrigem = parseInt(e.dataTransfer.getData('indexBlocoOrigem'));

    setBlocos((blocosAnteriores) => {
      const blocosAtualizados = [...blocosAnteriores];
      const blocoOrigem = blocosAtualizados[indexBlocoOrigem];
      const blocoDestino = blocosAtualizados[indexBlocoDestino];
      const [tarefa] = blocoOrigem.todos.splice(indexTarefa, 1);

      if (tarefa) {
        blocoDestino.todos.push(tarefa);
      }

      blocosAtualizados[indexBlocoOrigem] = blocoOrigem;
      blocosAtualizados[indexBlocoDestino] = blocoDestino;

      return blocosAtualizados;
    });
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  return (
    <main className="w-full h-screen flex flex-col px-10 gap-10 justify-center bg-gray-300">
      <Todo_Criador
        handleCriar={handleCriar}
        setInputValue={setValorInput}
        inputValue={valorInput}
      />

      <section className="flex justify-between gap-10">
        {blocos.map((bloco, indexBloco) => (
          <Todo_Bloco
            key={indexBloco}
            titulo={bloco.titulo}
            todos={bloco.todos}
            onDrop={(e) => handleDrop(e, indexBloco)}
            onDragOver={handleDragOver}
            onDragStart={(e, indexTarefa) => handleDragStart(e as React.DragEvent<HTMLLIElement>, indexTarefa, indexBloco)}
            blocoIndex={indexBloco}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
