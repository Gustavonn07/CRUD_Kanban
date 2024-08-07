export interface Modal {
    todoId: number | null,
    handleDeletar: (id: number) => void,
    fecharModal: () => void,
}