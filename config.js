const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_11_11_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg2LFxuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiN213V3lWRHU5MnZqZFJsNUZoU1RyN2xYYm5SY0FmUXJMREhGdVhHZHJzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxMzk2MjUyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDQ4QTY5NzczQkQ4RjYzMjlGMUUwODk2MjhDNkFDNzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTk3MDU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm92YXcyNGZMUU1tZkIzSG1VWWhJT2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjkyMjA0MjAtZTA3Zi00M2QzLTg1YzktNTE2ZTQxOGZhZjVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMTUwLFxuICAgICAgMTQwLFxuICAgICAgMjE1LFxuICAgICAgODYsXG4gICAgICAyMjQsXG4gICAgICAyNyxcbiAgICAgIDExOCxcbiAgICAgIDEwLFxuICAgICAgNjIsXG4gICAgICAxNzEsXG4gICAgICAyMDcsXG4gICAgICAxMjUsXG4gICAgICAxMDMsXG4gICAgICAxMTcsXG4gICAgICAxOSxcbiAgICAgIDE1NyxcbiAgICAgIDEwMSxcbiAgICAgIDE2NCxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDE3LFxuICAgICAgMjMxLFxuICAgICAgMjQ5LFxuICAgICAgMTcwLFxuICAgICAgMTMwLFxuICAgICAgMTYwLFxuICAgICAgMjI0LFxuICAgICAgMzAsXG4gICAgICAxNDAsXG4gICAgICAxNixcbiAgICAgIDczLFxuICAgICAgMTQxLFxuICAgICAgMTgzLFxuICAgICAgMjE0LFxuICAgICAgMjA3LFxuICAgICAgMTY4LFxuICAgICAgNzYsXG4gICAgICAxODcsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUJKNEhDMkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxMzk2MjUyNToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJvbWVvXCIsXG4gICAgXCJsaWRcIjogXCIyNDUxMzU2Nzc4ODIzNzY6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkNsdHFrREVMdjlzclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoY3VZUmV1WHFWVmd6algySC9FZUZDYTVIY1RockZsRHk2UzJMV1pkbFdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNtTmQ1Y3JmR3Q0emRDQjJOUjRjUzdFU2I2Y1l0WlBmbzhpalVIVC9Ibko4TUxja2hGQnE2SG9GZUx1cmtlMzNNVUxOeUk1c29iNUtmYmRCaTZQMEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdOdjZEYnMwYlBHOHZkYU44VFVsK3lQSjNmUHVadWM5MXFrNWxrbXM3UUVxUDVYU2hBaEJjYW1UUGRid1ZCUCtsTjhydm1kMDZiVWJjd1lKMXA0L0RnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMzk2MjUyNToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTk3MDU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1FrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHUWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDRCtQNjZPK3NVT01kUVpkeUdDMS82WHY1cnYrNDRMSFp6eWpVTENsT09rPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg5MjE3OTA4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNTk3MDU4NTIyXCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
