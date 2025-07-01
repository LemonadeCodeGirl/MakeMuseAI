// index.js (ESM version)
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5173;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from backend!');
});

app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello from Express API!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
