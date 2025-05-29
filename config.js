const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_04_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMyLFxuICAgICAgICA1NixcbiAgICAgICAgOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICA0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMixcbiAgICAgICAgMTU3LFxuICAgICAgICAzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICA0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkwLFxuICAgICAgICA1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibnptM0JyR3ZMaTFkK1FnZU0vUnUwNkd4aEVpWnpqRWw0aWVBWjVVODBwND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNDgwMDg3MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI2Mzc5MDdDQThDNjE5MDE2QkNDRjc1MDBGMjA1QkI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0ODUyNzQ4M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE0ODAwODcwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTMzNTM0N0U4ODgyQzA3NUYwQjE3MzdFNzVGOTg4QkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ4NTI3NDgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFVSHhIQjhuUjctbkdWWUpKQXJaYmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmEyZGQyOTItMDA1Ny00M2JjLWI1Y2ItNDcxNzUyYzkyODdmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDYyLFxuICAgICAgMTcyLFxuICAgICAgMzYsXG4gICAgICAzMCxcbiAgICAgIDE3MixcbiAgICAgIDY2LFxuICAgICAgMTkzLFxuICAgICAgMjAwLFxuICAgICAgMTkxLFxuICAgICAgMjUxLFxuICAgICAgMTIzLFxuICAgICAgMTI4LFxuICAgICAgNTksXG4gICAgICAxMjgsXG4gICAgICAxNTAsXG4gICAgICAyMjksXG4gICAgICAxMjUsXG4gICAgICA3MSxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgODIsXG4gICAgICAxNzMsXG4gICAgICAxODgsXG4gICAgICAyNDMsXG4gICAgICAyNDIsXG4gICAgICAxMDYsXG4gICAgICA0OSxcbiAgICAgIDc1LFxuICAgICAgNCxcbiAgICAgIDE5MixcbiAgICAgIDE5MixcbiAgICAgIDcxLFxuICAgICAgMTM4LFxuICAgICAgMjQ3LFxuICAgICAgMTI3LFxuICAgICAgNSxcbiAgICAgIDE4NyxcbiAgICAgIDE3OCxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tISG41SUdFUExTNGNFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVDFQNXU0Nlh5ZjVwNGRtdlY0c0x2SW5XRmgySndOSnJnTTZScU8zY1RIUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGZ1Z4UGZFcTZ5QVdPbmthdUI2cUNYeXBIMGVRSzZZU295YmlTNVU3dWcrUXNnMjJVYmpEV1JyRnp3cUpQdmNmZEx3Z0NkN0JZREF4bVhsNGNYUVBEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2eUlGMDRQUG50dEdUVCtxcGdXVXhQZnRYeHByQWZkTDdmUDJXcWEwRmt3bHFiRCs1YjBUU2FHNDFNd1RXdFdUcFJtVnZSbjZBRXk1L1ZxSXhGdElDUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE0ODAwODcwODo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDY2MzQ5ODk3ODExNTM6NDVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+kk/CfpJNcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE0ODAwODcwODo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4NTI3NDc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVlOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJWU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3S0pwa0MzQzVPamw5eWI1MytGa0tnSWJibGJISTVkZ1Q4WXFOYUlvREVFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDg4Nzg0OTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODUyNzQ4MjA1OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
