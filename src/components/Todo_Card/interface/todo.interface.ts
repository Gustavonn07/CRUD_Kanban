export interface Todo {
    texto: string, 
    imagem: string, 
    data: string, 
    horario: string
};

export interface TodoProps {
    todo: Todo;
    index: number;
    onDragStart: (e: React.DragEvent<HTMLLIElement>, index: number) => void;
};