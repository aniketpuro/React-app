const express = require('express');
const app = express();
const port = 3001;

app.get("/api", (req, res) => {
 res.json({ message: "Hello World!"});
});

app.listen(port, () => {
 console.log(`Server listening at http://localhost:${port}`);
}); 