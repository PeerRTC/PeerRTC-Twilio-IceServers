const accountSid = process.env.SID
const authToken = process.env.TOKEN

const HOST = "0.0.0.0"
const PORT = 1000 | process.env.PORT

const twilio = require('twilio')
const express = require('express')

const twilioClient = twilio(accountSid, authToken);
const expressApp = express()

expressApp.get("/getIceServers", (req, res)=>{
		twilioClient.tokens.create().then(token => res.send(token.iceServers));
})

expressApp.listen(PORT, HOST, ()=>{
	console.log("Server started")
})

