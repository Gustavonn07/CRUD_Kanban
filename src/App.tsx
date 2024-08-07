import { useState } from "react";

import Todo_Bloco from "./components/Todo_Bloco/bloco.component"
import Todo_Criador from "./components/Todo_Criador/criador.component";

import { Todo } from "./components/Todo_Card/interface/todo.interface";
import { Bloco } from "./components/Todo_Bloco/interface/bloco.interface";

import { timeRefactor } from "./utils/timeRefactor";

function App() {

  const [inputValue, setInputValue ] = useState<string>('')
  const [ todos, setTodos ] = useState<Todo[]>([]);
  const [ blocos, setBlocos ] = useState<Bloco[]>([
    { titulo: "Em Pendência", todos: [] },
    { titulo: "Tarefas", todos: [] },
    { titulo: "Em Progresso", todos: [] },
    { titulo: "Feito", todos: [] }
]);

    function handleCriar() {
      if(inputValue.trim()) {

        const newTodo: Todo = {
          texto: inputValue,
          imagem: 'https://avatars.githubusercontent.com/u/84361085?v=4',
          data: new Date().toLocaleDateString(),
          horario: timeRefactor(new Date().getHours() * 60 + new Date().getMinutes())
        }

        setBlocos((prevBlocos) => {
          const updatedBlocos = [...prevBlocos];
          updatedBlocos[0].todos.push(newTodo);
          return updatedBlocos;
        });
        
        setTodos([...todos, newTodo])
        setInputValue('');
      }
    }

  return (
    <main className="w-full h-screen flex flex-col px-10 gap-10 justify-center bg-gray-300">
      <Todo_Criador handleCriar={handleCriar} setInputValue={setInputValue} inputValue={inputValue}/>

      <div className="flex justify-between gap-10">
        {blocos.map((bloco, index) => (
            <Todo_Bloco
                key={index}
                titulo={bloco.titulo}
                todos={bloco.todos}
            />
        ))}
      </div>
    </main>
  )
}

export default App;
