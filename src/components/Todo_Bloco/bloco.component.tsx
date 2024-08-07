import Todo_Card from "../Todo_Card/todo.component";
import { Bloco } from "./interface/bloco.interface";

const Todo_Bloco = ({ titulo, todos }: Bloco) => {

    return (
        <section className="w-1/4 flex flex-col rounded-lg overflow-hidden shadow-lg shadow-[#00000040]">
            <h2 className="w-full rounded-t-xl bg-emerald-300 h-16 flex justify-center items-center border-[5px] border-b-0 border-gray-700 text-gray-700 text-3xl font-semibold tracking-wider shadow-md">{titulo}</h2>

            <ul className="bg-gray-700 h-[70vh] px-10 pt-4 flex flex-col gap-8">
                {todos.map((todo, index) => (
                    <Todo_Card
                        key={index}
                        texto={todo.texto}
                        imagem={todo.imagem}
                        data={todo.data}
                        horario={todo.horario}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Todo_Bloco;