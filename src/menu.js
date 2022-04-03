exports.menu = (prefix, pushname, ucapanWaktu, tanggal, time, timeMak, timeJay, botname, ownername, runtime, sender, latensie, mode, pendaftar, tmp_hit) => {
return  `Hi ${pushname} ${ucapanWaktu}

*「 WAKTU INDONESIA 」*
• TANGGAL : ${tanggal}
• WIB : ${time}
• WITA : ${timeMak}
• WIT : ${timeJay}

*「 INFO BOT 」*
• NAMA BOT : ${botname}
• NAMA  OWNER : ${ownername}
• RUNTIME : ${runtime(process.uptime())}
• SPEED : ${latensie.toFixed(4)} _Detik_
• MODE : ${mode ? 'SELF' : 'PUBLIC'}
• TOTAL PENGGUNA : ${pendaftar.length}
• TOTAL HIT : ${tmp_hit.length}

*「 INFO USER 」*
• NAMA : ${pushname}
• API : https://wa.me/${sender.split('@')[0]}`
}