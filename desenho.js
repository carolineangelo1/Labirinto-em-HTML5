const tamanho = 40;
const jogador = { x: 0, y: 0 }; // Posição inicial do jogador
const bichinhos = [{ x: 4, y: 4 }, { x: 7, y: 2 }]; // Posições iniciais dos bichinhos

const labirinto = [
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 3, 0, 1, 0, 0, 0], // Posição do bichinho representada por 3
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 3, 1, 0], // Outro bichinho
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 2] // Chegada representada por 2
];

function desenhaLabirinto(ctx) {
    for (let y = 0; y < labirinto.length; y++) {
        for (let x = 0; x < labirinto[y].length; x++) {
            if (labirinto[y][x] === 1) {
                ctx.fillStyle = 'black'; // Paredes
            } else if (labirinto[y][x] === 2) {
                ctx.fillStyle = 'green'; // Chegada
            } else {
                ctx.fillStyle = 'white'; // Caminho
            }
            ctx.fillRect(x * tamanho, y * tamanho, tamanho, tamanho);
        }
    }

    // Desenha os bichinhos
    ctx.fillStyle = 'blue';
    bichinhos.forEach((bicho) => {
        ctx.fillRect(bicho.x * tamanho, bicho.y * tamanho, tamanho, tamanho);
    });

    // Desenha o jogador
    ctx.fillStyle = 'red';
    ctx.fillRect(jogador.x * tamanho, jogador.y * tamanho, tamanho, tamanho);
}
