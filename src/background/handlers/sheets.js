module.exports = {
	sheets: global.share.ipcMain.on('READ_FILE', (event, payload) => {
		event.reply('READ_FILE', payload);
	}),
};
