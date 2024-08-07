import { Todo } from "../../Todo_Card/interface/todo.interface";

export interface Bloco {
    titulo: string,
    todos: Todo[]
}

export interface BlocoProps {
    titulo: string;
    todos: Todo[];
    onDrop: (e: React.DragEvent<HTMLDivElement>, blocoIndex: number) => void,
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void,
    onDragStart: (e: React.DragEvent<HTMLLIElement>, index: number) => void,
    blocoIndex: number,
    abrirModal: (todo_id: number) => void
}