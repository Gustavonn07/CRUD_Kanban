import { timeRefactor } from "../../utils/timeRefactor";
import { Bloco } from "./interface/bloco.interface";
import Todo_Card from "../Todo_Card/todo.component";

const Todo_Bloco = ({ titulo }: Bloco) => {

    return (
        <section className="w-1/4 flex flex-col rounded-lg overflow-hidden">
            <h2 className="w-full rounded-t-xl bg-emerald-300 h-16 flex justify-center items-center border-[5px] border-b-0 border-gray-700 text-gray-700 text-3xl font-semibold tracking-wider shadow-md">{titulo}</h2>

            <ul className="bg-gray-700 h-[70vh] px-10 pt-4 flex flex-col gap-8">
                <Todo_Card texto={"Texto"} data={"07/07/2005"} horario={timeRefactor(60 * 8 + 47)} imagem={"https://avatars.githubusercontent.com/u/84361085?v=4"}/>
            </ul>
        </section>
    )
}

export default Todo_Bloco;