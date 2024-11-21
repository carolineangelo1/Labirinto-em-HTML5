function moverJogador(direcao, ctx) {
    const { x, y } = jogador;

    if (direcao === 'ArrowUp' && y > 0 && labirinto[y - 1][x] !== 1) jogador.y--;
    if (direcao === 'ArrowDown' && y < labirinto.length - 1 && labirinto[y + 1][x] !== 1) jogador.y++;
    if (direcao === 'ArrowLeft' && x > 0 && labirinto[y][x - 1] !== 1) jogador.x--;
    if (direcao === 'ArrowRight' && x < labirinto[0].length - 1 && labirinto[y][x + 1] !== 1) jogador.x++;

    // Verifica se o jogador colidiu com um bichinho
    if (bichinhos.some((bicho) => bicho.x === jogador.x && bicho.y === jogador.y)) {
        alert('Você foi pego por um bichinho! Game over!');
        jogador.x = 0; // Reinicia o jogador
        jogador.y = 0;
    }

    desenhaLabirinto(ctx);
}
