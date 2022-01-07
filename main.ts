import express from "express"
import cors from "cors"
import body_parser from "body-parser"
const  connect = require("spotify-local-control")

export const app = express()

const main_server_port = 8080

var spotify_client = connect()

app.use(body_parser.json())
app.use(cors())

app.use("/", express.static("webclient"))

app.get("/spotify/pause", (req, res) => {
	spotify_client.pause()
	res.send("ok")
})

app.get("/spotify/play", (req, res) => {
	spotify_client.resume()
	res.send("ok")
})

app.listen(main_server_port, () => {
	console.log(`[express] The server is listening on port ${main_server_port}`)
})
