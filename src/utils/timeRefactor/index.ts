
export function timeRefactor(minutos: number) {
    const horas = Math.floor(minutos / 60);
    const minutosFaltantes = minutos % 60;
    
    const horasFormatadas = String(horas).padStart(2, '0');
    const minutosFormatados = String(minutosFaltantes).padStart(2, '0');
    
    return `${horasFormatadas}:${minutosFormatados}`;
}