let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*🕸⤷ 𝐌𝐄𝐍𝐂𝐈𝐎𝐍𝐄𝐒:* ${pesan}`
  let teks = `*𝗔𝗖𝗧𝗜́𝗩𝗔𝗧𝗘 𝗣𝗟𝗔𝗡𝗧𝗔 𝗤𝗟*\n\n ${oi}\n\n➥ _*» @mxnzzyy.cr:*_\n`
  for (let mem of participants) {
  teks += `🕷 ᯓ @${mem.id.split('@')[0]}\n`}
  teks += `└ *𝐌𝐗𝐍𝐙𝐙𝐘𝐘 𝐁𝐎𝐓 🕷*\n\n ${oi}\n\n*_👸🏻@mxnzzyy.cr_*\n`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|putos|animales)$/i
  handler.admin = true
  handler.group = true
  export default handler