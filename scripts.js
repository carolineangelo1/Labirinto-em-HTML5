function moverBichinhos() {
    bichinhos.forEach((bicho) => {
        const direcoes = [
            { x: 0, y: -1 }, // Cima
            { x: 0, y: 1 },  // Baixo
            { x: -1, y: 0 }, // Esquerda
            { x: 1, y: 0 }   // Direita
        ];
        const movimento = direcoes[Math.floor(Math.random() * direcoes.length)];
        const novoX = bicho.x + movimento.x;
        const novoY = bicho.y + movimento.y;

        // Move apenas se não houver parede ou outro bichinho
        if (
            novoX >= 0 &&
            novoX < labirinto[0].length &&
            novoY >= 0 &&
            novoY < labirinto.length &&
            labirinto[novoY][novoX] !== 1 &&
            !bichinhos.some((outro) => outro.x === novoX && outro.y === novoY)
        ) {
            bicho.x = novoX;
            bicho.y = novoY;
        }
    });

    desenhaLabirinto(ctx);
}

// Move os bichinhos a cada 500ms
setInterval(moverBichinhos, 500);
