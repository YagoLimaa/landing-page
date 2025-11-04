import express from 'express';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Middlewares
// Enable CORS for all routes
app.use((req, res, next) => {
  // Em produção, substitua '*' pelo domínio do seu frontend para mais segurança
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
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
  const n8nWebhookUrl = 'http://localhost:5678/webhook/878c59ec-2db4-483a-8156-4ebf0b93947b';

  try {
    // Envia os dados para o n8n
    await axios.post(n8nWebhookUrl, {
      name,
      email,
      phone,
      message
    });

    console.log('Form data sent to n8n successfully.');
    console.log(name,email,phone,message);
    
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
