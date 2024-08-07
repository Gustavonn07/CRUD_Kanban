export interface Todo {
    id: number,
    texto: string, 
    imagem: string, 
    data: string, 
    horario: string
};

export interface TodoProps {
    todo: Todo,
    index: number,
    onDragStart: (e: React.DragEvent<HTMLLIElement>, index: number) => void,
    abrirModal: (todo_id: number) => void
};