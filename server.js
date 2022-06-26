const accountSid = process.env.SID
const authToken = process.env.TOKEN

const HOST = "0.0.0.0"
const PORT = process.env.PORT || 1000

const twilio = require('twilio')
const express = require('express')
const cors = require('cors')

const twilioClient = twilio(accountSid, authToken);
const expressApp = express()

expressApp.get("/getIceServers", cors(), async(req, res)=>{
		try{
			const token = await twilioClient.tokens.create()
			response = token.iceServers
		}catch(e){
			// Unexpected error occured or reached twilio free limit.
			response = []
		}

		res.send(response)
		
})

expressApp.listen(PORT, HOST, ()=>{
	console.log("Server started.")
})

