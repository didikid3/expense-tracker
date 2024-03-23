const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => res.send("Hello"))
app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user3"]})
})

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
