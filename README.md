# RestAPIs

Welcome to the **RestAPIs**! These APIs provides various endpoints for generating AI text and images, managing conversations, downloading media, and more. It's designed to facilitate interactions with AI models and simplify media handling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [AI Chat Completions API](#ai-chat-completions-api)
  - [GPT Model API](#gpt-model-api)
  - [ChatGPT API](#chatgpt-api)
  - [Image Generation APIs](#image-generation-apis)
    - [Anime Image Generation](#anime-image-generation)
    - [Pixel Art Generation](#pixel-art-generation)
    - [Mini DALL-E Generation](#mini-dall-e-generation)
  - [Media Download APIs](#media-download-apis)
    - [Twitter Media Download](#twitter-media-download)
    - [Facebook Media Download](#facebook-media-download)
    - [YouTube Media Download](#youtube-media-download)
- [Examples](#examples)
- [License](#license)

## Installation

To set up the GlobalSprak API on your local machine, follow these steps:

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install the required dependencies:
   ```bash
   npm install express globalsprak
   ```

4. Start the server:
   ```bash
   node index.js
   ```

5. Your API will be running at `http://localhost:3000`.

## Usage

You can interact with the API using any HTTP client, such as Postman or curl. Each endpoint accepts specific query parameters as described in the API Endpoints section.

## API Endpoints

### AI Chat Completions API

**Endpoint:** `/ai`  
**Method:** `GET`  
**Description:** Generates a response based on a user-provided prompt using an AI model.

**Query Parameters:**
- `prompt` (string): The input text for the AI model. *(required)*
- `model` (string): The AI model to be used (optional). Defaults to a specified model if not provided.

**Response Format:**
```json
{
  "response": "AI-generated response based on the prompt."
}
```

---

### GPT Model API

**Endpoint:** `/gpt`  
**Method:** `GET`  
**Description:** Generates text using the specified GPT model based on the prompt provided.

**Query Parameters:**
- `prompt` (string): The text input for the GPT model. *(required)*

**Response Format:**
```json
{
  "response": "Generated text based on the prompt."
}
```

---

### ChatGPT API

**Endpoint:** `/chatgpt`  
**Method:** `GET`  
**Description:** Generates a response to a user’s input using the ChatGPT model.

**Query Parameters:**
- `prompt` (string): The input text for the ChatGPT model. *(required)*

**Response Format:**
```json
{
  "response": "ChatGPT response to the input."
}
```

---

### Image Generation APIs

#### Anime Image Generation

**Endpoint:** `/animagen`  
**Method:** `GET`  
**Description:** Generates anime-style images based on a user-provided prompt.

**Query Parameters:**
- `prompt` (string): The prompt for generating an anime image. *(required)*
- `count` (number): The number of images to generate. *(optional, defaults to 1)*

**Response Format:**
```json
{
  "images": ["url1", "url2", ...]
}
```

---

#### Pixel Art Generation

**Endpoint:** `/pixelart`  
**Method:** `GET`  
**Description:** Generates pixel art images based on a user-provided prompt.

**Query Parameters:**
- `prompt` (string): The prompt for generating a pixel art image. *(required)*
- `count` (number): The number of images to generate. *(optional, defaults to 1)*

**Response Format:**
```json
{
  "images": ["url1", "url2", ...]
}
```

---

#### Mini DALL-E Generation

**Endpoint:** `/minidalle`  
**Method:** `GET`  
**Description:** Generates images using the Mini DALL-E model based on a prompt.

**Query Parameters:**
- `prompt` (string): The prompt for generating a DALL-E image. *(required)*

**Response Format:**
```json
{
  "image": "url"
}
```

---

### Media Download APIs

#### Twitter Media Download

**Endpoint:** `/twdl`  
**Method:** `GET`  
**Description:** Downloads media from a specified Twitter URL.

**Query Parameters:**
- `url` (string): The URL of the Twitter media to download. *(required)*

**Response Format:**
```json
{
  "downloaded_media": "url"
}
```

---

#### Facebook Media Download

**Endpoint:** `/fbdl`  
**Method:** `GET`  
**Description:** Downloads media from a specified Facebook URL.

**Query Parameters:**
- `url` (string): The URL of the Facebook media to download. *(required)*

**Response Format:**
```json
{
  "downloaded_media": "url"
}
```

---

#### YouTube Media Download

**Endpoint:** `/ytdl`  
**Method:** `GET`  
**Description:** Downloads audio and video from a specified YouTube URL.

**Query Parameters:**
- `url` (string): The URL of the YouTube media to download. *(required)*

**Response Format:**
```json
{
  "audio": "url_to_audio_file",
  "video": "url_to_video_file"
}
```

---

## Examples

### AI Chat Completions Example

**Request:**
```bash
curl -X GET "http://localhost:3000/ai?prompt=What is AI?&model=chat-gpt"
```

**Response:**
```json
{
  "response": "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines..."
}
```

### Anime Image Generation Example

**Request:**
```bash
curl -X GET "http://localhost:3000/animagen?prompt=happy%20anime%20girl&count=2"
```

**Response:**
```json
{
  "images": ["url1", "url2"]
}
```

### Pixel Art Generation Example

**Request:**
```bash
curl -X GET "http://localhost:3000/pixelart?prompt=cute%20pixel%20cat&count=3"
```

**Response:**
```json
{
  "images": ["url1", "url2", "url3"]
}
```

### Twitter Media Download Example

**Request:**
```bash
curl -X GET "http://localhost:3000/twdl?url=https://twitter.com/example/status/123456789"
```

**Response:**
```json
{
  "downloaded_media": "url_to_downloaded_media"
}
```

### Facebook Media Download Example

**Request:**
```bash
curl -X GET "http://localhost:3000/fbdl?url=https://facebook.com/example/post/123456789"
```

**Response:**
```json
{
  "downloaded_media": "url_to_downloaded_media"
}
```

### YouTube Media Download Example

**Request:**
```bash
curl -X GET "http://localhost:3000/ytdl?url=https://youtube.com/watch?v=example123"
```

**Response:**
```json
{
  "audio": "url_to_audio_file",
  "video": "url_to_video_file"
}
```
