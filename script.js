// Função que simula a inscrição em um curso
function inscreverCurso(nomeDoCurso) {
    // Cria uma mensagem personalizada
    const mensagem = `⚔️ Excelente escolha! Você iniciou sua jornada na forja do curso: ${nomeDoCurso}.\n\nSeu acesso será enviado para o e-mail cadastrado. Prepare o seu teclado!`;
    
    // Exibe um alerta nativo no navegador (pode ser substituído por um modal customizado depois)
    alert(mensagem);
    
    console.log(`Usuário demonstrou interesse no curso: ${nomeDoCurso}`);
}

// Pequeno efeito visual no console para ficar profissional quando o professor abrir a inspeção de página
console.log("%c[Pixel Forge] Script carregado com sucesso! Pronto para criar jogos.", "color: #66fcf1; font-weight: bold; font-size: 12px;");