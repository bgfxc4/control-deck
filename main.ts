import express from "express"
import cors from "cors"
import body_parser from "body-parser"
import { exec } from "child_process"

const app = express()

const main_server_port = 8080

app.use(body_parser.json())
app.use(cors())

app.use("/", express.static("webclient"))

app.get("/spotify/pause", (req, res) => {
	exec("playerctl --player=spotify pause")
	res.send("ok")
})

app.get("/spotify/play", (req, res) => {
	exec("playerctl --player=spotify play")
	res.send("ok")
})

app.listen(main_server_port, () => {
	console.log(`[express] The server is listening on port ${main_server_port}`)
})
