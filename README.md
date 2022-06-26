# PeerRTC Twilio IceServers ☃️
* A simple backend server used by [PeerRTC](https://github.com/PeerRTC/PeerRTC) for retrieving default ice servers provided by [Twilio](https://www.twilio.com/).

* If no `configurations` parameter are provided in the [PeerRTC constructor](https://github.com/PeerRTC/PeerRTC#peerrtc-constructor), 
then the module will automatically fetch iceServers from the [server](https://github.com/PeerRTC/PeerRTC-Twilio-IceServers) owned by us.

* Using this [server](https://github.com/PeerRTC/PeerRTC-Twilio-IceServers) is optional since there are a lot of ways to obtain ice servers. It is also adviseable to provide own
way of obtaining ice servers since we are only using free account in [Twilio](https://www.twilio.com/). 

* Feel free the [source code]((https://github.com/PeerRTC/PeerRTC-Twilio-IceServers)) as template.
