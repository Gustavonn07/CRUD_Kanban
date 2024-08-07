import { Modal } from "./interface/modal.interface";

const Todo_Modal: React.FC<Modal> = ({ todoId, handleDeletar, fecharModal }) => {
  

    return (
      <section className="fixed top-0 left-0 px-4 w-full h-screen bg-[#00000060] flex justify-center items-center">

          <article className="bg-gray-700 p-10 text-gray-100 flex flex-col gap-10 rounded shadow-xl shadow-[#00000040]">
              <h2 className="text-4xl font-semibold">Confirme deletação de tarefa:</h2>
              <p className="text-3xl font-medium">Você tem certeza que deseja deletar esta tarefa?</p>

              <div className="flex gap-10">
                <button onClick={fecharModal} className="bg-red-600 px-4 py-2 text-2xl rounded shadow-xl duration-200 hover:-translate-y-1 shadow-[#00000020]">Cancelar</button>
                <button onClick={() => { if (todoId !== null) handleDeletar(todoId); fecharModal(); }} className="px-4 py-2 text-2xl rounded shadow-xl duration-200 hover:-translate-y-1 shadow-[#00000020] border-2 border-gray-100 hover:border-green-400 hover:bg-green-400 hover:text-gray-600">Confirmar</button>
              </div>
          </article>
      </section>
    );
  };
  
  export default Todo_Modal;