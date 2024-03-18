const express = require("express");

const PORT = process.env.PORT || 3000
const app = express();

app.get("/", (req, res) => res.send("Hello"))
app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user3"]})
})

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
