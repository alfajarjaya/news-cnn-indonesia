const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/cnn/api/news/terkini', async (req, res) => {
    try {
        const response = await fetch('https://api-berita-indonesia.vercel.app/cnn/terbaru/');
        const data = await response.json();
        res.json(data.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', detail: error});
    }
});

app.get('/cnn/api/news/nasional', async (req, res) => {
    try {
        const response = await fetch('https://api-berita-indonesia.vercel.app/cnn/nasional/');
        const data = await response.json();
        res.json(data.data)
    } catch (error) {
        res.status(500).json({message: 'Error fetching data', detail: error})
    }
})

app.get('/cnn/api/news/internasional', async (req, res) => {
    try {
        const response = await fetch('https://api-berita-indonesia.vercel.app/cnn/internasional/');
        const data = await response.json();
        res.json(data.data)
    } catch (error) {
        res.status(500).json({message: 'Error fetching data', detail: error})
    }
})

app.get('/cnn/api/news/ekonomi', async (req, res) => {
    try {
        const response = await fetch('https://api-berita-indonesia.vercel.app/cnn/ekonomi/');
        const data = await response.json();
        res.json(data.data)
    } catch (error) {
        res.status(500).json({message: 'Error fetching data', detail: error})
    }
})

app.get('/cnn/api/news/olahraga', async (req, res) => {
    try {
        const response = await fetch('https://api-berita-indonesia.vercel.app/cnn/olahraga/');
        const data = await response.json();
        res.json(data.data)
    } catch (error) {
        res.status(500).json({message: 'Error fetching data', detail: error})
    }
})

app.get('/cnn/api/news/teknologi', async (req, res) => {
    try {
        const response = await fetch('https://api-berita-indonesia.vercel.app/cnn/teknologi/');
        const data = await response.json();
        res.json(data.data)
    } catch (error) {
        res.status(500).json({message: 'Error fetching data', detail: error})
    }
})

app.get('/cnn/api/news/hiburan', async (req, res) => {
    try {
        const response = await fetch('https://api-berita-indonesia.vercel.app/cnn/hiburan/');
        const data = await response.json();
        res.json(data.data)
    } catch (error) {
        res.status(500).json({message: 'Error fetching data', detail: error})
    }
})

app.get('/cnn/api/news/gaya-hidup', async (req, res) => {
    try {
        const response = await fetch('https://api-berita-indonesia.vercel.app/cnn/gayaHidup/');
        const data = await response.json();
        res.json(data.data)
    } catch (error) {
        res.status(500).json({message: 'Error fetching data', detail: error})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
