import { Criador } from "./interface/criador.interface";

const Todo_Criador = ({handleCriar ,setInputValue, inputValue }: Criador) => {

    return (
        <section className="flex flex-col self-start gap-5">
            <label className="text-shadow text-2xl text-gray-700 font-semibold" htmlFor="criador">Adicione uma tarefa:</label>

            <div className="flex gap-5">
                <input className="shadow-lg shadow-[#00000020] bg-gray-100 text-gray-700 px-4 text-xl rounded duration-200 hover:-translate-y-1 focus:-translate-y-1" type="text" id="criador" name="criador" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>

                <input className="shadow-lg shadow-[#00000040] bg-gray-700 py-2 px-4 text-xl text-gray-100 tracking-wide rounded  duration-200 hover:-translate-y-1 focus:-translate-y-1 active:-translate-y-[1px]" type="button" value="Criar" onClick={handleCriar}/>
            </div>
        </section>
    )
}

export default Todo_Criador;