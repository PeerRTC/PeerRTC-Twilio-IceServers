# PeerRTC Twilio IceServers ☃️
A simple backend server used by [PeerRTC](https://github.com/PeerRTC/PeerRTC) for retrieving default ice servers provided by [Twilio](https://www.twilio.com/).
Using this [server](https://github.com/PeerRTC/PeerRTC-Twilio-IceServers) is optional since there are a lot of ways to obtain ice servers. 

## 💡 Additional Info
* If no `configurations` parameter are provided in the [PeerRTC constructor](https://github.com/PeerRTC/PeerRTC#peerrtc-constructor), 
then the module will automatically fetch ice servers from the [server](https://github.com/PeerRTC/PeerRTC-Twilio-IceServers) owned by us.

* It is adviseable to provide own way of obtaining ice servers since we are only using free account in [Twilio](https://www.twilio.com/). 

## ⚙️ Setup
1. Create account and log in [Twilio](https://www.twilio.com/).
2. Install [Node.js](https://nodejs.org/en/) first. Skip this step if already installed.
3. Clone this [repository]([https://github.com/PeerRTC/PeerRTC-Server](https://github.com/PeerRTC/PeerRTC-Twilio-IceServers)).
4. In command line, navigate to root directory of the newly downloaded repository.
5. Install all needed dependencies via `npm install` in the command line.
6. Set the enviroment variables. The server needed the TOKEN and SID environment as it will be passed
in the Twilio api. In the command line,
```
set SID=your-account-sid
set TOKEN=your-token
```
Account sid and token can be found in Twilio [console](https://console.twilio.com/) on Account Info section.

7. Start the server by entering `npm start` in the command line.

## 👨‍🏫 Usage 
The server is using the getIceServers get method to return an array of ice servers.
```
https://your-server.com/getIceServers
```
The returned array can be inserted in the [PeerRTC constructor](https://github.com/PeerRTC/PeerRTC#peerrtc-constructor) as follows:
```
fetch("https://your-server.com/getIceServers")
  .then(response=>response.json())
  .then(iceServers=>{
  
    serverURL = "https://my-own-server-url.com"
    configurations = {
      iceServers: iceServers,
      ...
    }
    
   peer = new PeerRTC(serverURL, configurations)
  })

```
