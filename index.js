const path = require("path")
const express =  require("express")
const app = express()

app.use(express.static(path.join(__dirname, 'projects')));
app.get("/:name", (req, res) => {
    res.sendFile(`${__dirname}/${req.params.name}/:name/index.html`)
})
app.listen(process.env.PORT || 5000, () => {
    console.log("Server online")
})