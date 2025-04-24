const express = require('express');
const app = express();
const PORT = 3000;

// Função para formatar data/hora no fuso horário brasileiro
function getBrazilianDateTime() {
  const now = new Date();

  // Formata a data (DD/MM/AAAA)
  const date = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(now);

  // Formata a hora (HH:MM:SS)
  const time = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(now);

  return { date, time };
}

app.get('/', (req, res) => {
  const { date, time } = getBrazilianDateTime();
  res.json({ date, time });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
