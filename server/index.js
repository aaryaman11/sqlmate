import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3005;

app.get('/', (req, res) => {
    res.send('Hello World from the API!');
});
app.listen(PORT, () => 
    {console.log(`Server running on port:${PORT}`)
});
