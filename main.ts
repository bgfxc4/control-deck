import express from "express"
import cors from "cors"
import body_parser from "body-parser"
const  connect = require("spotify-local-control")

export const app = express()

const main_server_port = 8080

try {
	var spotify_client = connect()
} catch(e) {
	console.log("Spotify not opened")
}

app.use(body_parser.json())
app.use(cors())

app.use("/", express.static("webclient"))

app.get("/spotify/pause", (req, res) => {
	if (!spotify_client)
		return res.status(500).send("spotify_client not connected")
	spotify_client.pause()
	res.send("ok")
})

app.get("/spotify/play", (req, res) => {
	if (!spotify_client)
		return res.status(500).send("spotify_client not connected")
	spotify_client.resume()
	res.send("ok")
})

app.listen(main_server_port, () => {
	console.log(`[express] The server is listening on port ${main_server_port}`)
})
