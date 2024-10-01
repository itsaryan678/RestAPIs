const express = require('express');
const { 
  ai, gpt, chatgpt, gptweb, llama, mixtral, coral, coralchat, coralreset, 
  animagen, pixelart, xi, gen, gen2, xl3, flux, minidalle, dallev2, dalle, xl, generate, emi, bing, prodia,
  twdl, fbdl, tkdl, drdl, instadl, ytdl, spdl, alldl 
} = require('globalsprak');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/ai', async (req, res) => {
  const { prompt, model } = req.query;
  const response = await ai(prompt, model);
  res.json(response);
});

app.get('/gpt', async (req, res) => {
  const { prompt } = req.query;
  const response = await gpt(prompt);
  res.json(response);
});

app.get('/chatgpt', async (req, res) => {
  const { prompt } = req.query;
  const response = await chatgpt(prompt);
  res.json(response);
});

app.get('/gptweb', async (req, res) => {
  const { prompt } = req.query;
  const response = await gptweb(prompt);
  res.json(response);
});

app.get('/llama', async (req, res) => {
  const { prompt } = req.query;
  const response = await llama(prompt);
  res.json(response);
});

app.get('/mixtral', async (req, res) => {
  const { prompt } = req.query;
  const response = await mixtral(prompt);
  res.json(response);
});

app.get('/coral', async (req, res) => {
  const { prompt } = req.query;
  const response = await coral(prompt);
  res.json(response);
});

app.get('/coralchat', async (req, res) => {
  const { prompt, uid } = req.query;
  const response = await coralchat(prompt, uid);
  res.json(response);
});

app.get('/coralreset', async (req, res) => {
  const { uid } = req.query;
  const response = await coralreset(uid);
  res.json(response);
});

app.get('/animagen', async (req, res) => {
  const { prompt, count } = req.query;
  const response = await animagen(prompt, count);
  res.json(response);
});

app.get('/pixelart', async (req, res) => {
  const { prompt, count } = req.query;
  const response = await pixelart(prompt, count);
  res.json(response);
});

app.get('/xi', async (req, res) => {
  const { prompt, count } = req.query;
  const response = await xi(prompt, count);
  res.json(response);
});

app.get('/gen', async (req, res) => {
  const { prompt, count } = req.query;
  const response = await gen(prompt, count);
  res.json(response);
});

app.get('/gen2', async (req, res) => {
  const { prompt, count } = req.query;
  const response = await gen2(prompt, count);
  res.json(response);
});

app.get('/xl3', async (req, res) => {
  const { prompt } = req.query;
  const response = await xl3(prompt);
  res.json(response);
});

app.get('/flux', async (req, res) => {
  const { prompt } = req.query;
  const response = await flux(prompt);
  res.json(response);
});

app.get('/minidalle', async (req, res) => {
  const { prompt } = req.query;
  const response = await minidalle(prompt);
  res.json(response);
});

app.get('/dallev2', async (req, res) => {
  const { prompt } = req.query;
  const response = await dallev2(prompt);
  res.json(response);
});

app.get('/dalle', async (req, res) => {
  const { prompt, prompt_negative, width, height, guidance_scale } = req.query;
  const response = await dalle(prompt, prompt_negative, width, height, guidance_scale);
  res.json(response);
});

app.get('/xl', async (req, res) => {
  const { prompt, prompt_negative, image_style, guidance_scale } = req.query;
  const response = await xl(prompt, prompt_negative, image_style, guidance_scale);
  res.json(response);
});

app.get('/generate', async (req, res) => {
  const { prompt } = req.query;
  const response = await generate(prompt);
  res.json(response);
});

app.get('/emi', async (req, res) => {
  const { prompt } = req.query;
  const response = await emi(prompt);
  res.json(response);
});

app.get('/bing', async (req, res) => {
  const { prompt, cookie } = req.query;
  const response = await bing(prompt, cookie);
  res.json(response);
});

app.get('/prodia', async (req, res) => {
  const { prompt, model } = req.query;
  const response = await prodia(prompt, model);
  res.json(response);
});

app.get('/twdl', async (req, res) => {
  const { url } = req.query;
  const response = await twdl(url);
  res.json(response);
});

app.get('/fbdl', async (req, res) => {
  const { url } = req.query;
  const response = await fbdl(url);
  res.json(response);
});

app.get('/tkdl', async (req, res) => {
  const { url } = req.query;
  const response = await tkdl(url);
  res.json(response);
});

app.get('/drdl', async (req, res) => {
  const { url } = req.query;
  const response = await drdl(url);
  res.json(response);
});

app.get('/instadl', async (req, res) => {
  const { url } = req.query;
  const response = await instadl(url);
  res.json(response);
});

app.get('/ytdl', async (req, res) => {
  const { url } = req.query;
  const response = await ytdl(url);
  res.json(response);
});

app.get('/spdl', async (req, res) => {
  const { url } = req.query;
  const response = await spdl(url);
  res.json(response);
});

app.get('/alldl', async (req, res) => {
  const { url } = req.query;
  const response = await alldl(url);
  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
