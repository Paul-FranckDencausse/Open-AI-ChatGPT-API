const express = require('express');
const { OpenAIApi } = require('@openai/api');
const dotenv = require('dotenv');

dotenv.config(); // Charge les variables d'environnement à partir du fichier .env

const app = express();
const port = 3000;

// Utilisez process.env pour accéder à vos variables d'environnement
const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

// Le reste du code reste inchangé

