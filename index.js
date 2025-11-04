const express = require('express');
const path = require('path');
const axios = require('axios'); // Adicionado axios

const app = express();
const port = 3000;

// Middlewares
app.use(express.json()); // Adicionado para parsear JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota de contato para integração com n8n
app.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // IMPORTANTE: Substitua pela URL do seu webhook do n8n
  const n8nWebhookUrl = 'http://localhost:5678/webhook-test/878c59ec-2db4-483a-8156-4ebf0b93947b';

  try {
    // Envia os dados para o n8n
    await axios.post(n8nWebhookUrl, {
      name,
      email,
      phone,
      message
    });

    console.log('Form data sent to n8n successfully.');
    res.status(200).send({ message: 'Mensagem enviada com sucesso!' });

  } catch (error) {
    console.error('Error sending data to n8n:', error.message);
    res.status(500).send({ message: 'Falha ao enviar a mensagem.' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
