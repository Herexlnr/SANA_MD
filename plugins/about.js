/* 
created by TOHID KHAN
contact me 917849917350
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│ Name      : 𝘴𝘢𝘯𝘢-ᴋʜᴀɴ
 ◈ •│
 ◈ •│ Place      : 𝘱𝘢𝘬𝘪𝘴𝘵𝘢𝘯
 ◈ •│
 ◈ •│ Gender    : 𝘍𝘦𝘮𝘢𝘭𝘦
 ◈ •│
 ◈ •│ Age       : 18_
 ◈ •│
 ◈ •│ Status     : 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁
 ◈ •│
 ◈ •│ Phone     : wa.me/923337468951
 ◈ •│
 ◈ •│ 𝘛𝘐𝘒𝘛𝘖𝘒  ID      :𝘮𝘦𝘯𝘵𝘢𝘭_𝘲𝘶𝘦𝘦𝘯91
 ◈ •│
 ◈ •│ Connect   : https://wa.me/qr/RPLVSHTAUQ7UE1
 ◈ •│
 ◈ •│ Github     : 𝘴𝘢𝘯𝘢3165829
 ◈ •│
 ◈ •│ Website    : https://github.com/sana3165829/SANA_MD
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ • *◆◆◆◆◆◆◆◆◆◆◆◆*

 ◈ •*[ • TOHID_MD - TEAM • ]*
 ◈ •*╭┈───────────────•*
 ◈ •*│  ◦* *▢➠ᴛᴏʜɪᴅ ᴋʜᴀɴ*
 ◈ •*│  ◦* *▢➠ꜱᴀɴᴀ ᴋʜᴀɴ*
 ◈ •*│  ◦* *▢➠ꜱʜᴀʜ ꜰᴀɪꜱᴀʟ*
 ◈ •*│  ◦* *▢➠Qᴜᴇᴇɴ ᴋᴏꜰɪᴀ*
 ◈ •*│  ◦* *▢➠ɴɪᴍʀᴀ Qᴜᴇᴇɴ*
 ◈ •*╰┈───────────────•*
 ◈ •*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴏʜɪᴅ ᴋʜᴀɴ
 ◈ •*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
