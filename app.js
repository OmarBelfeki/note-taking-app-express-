const express = require("express");
const notesRouter = require("./routes/notes");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/notes', notesRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
