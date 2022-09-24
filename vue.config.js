const path = require('path');
module.exports = {
	pluginOptions: {
		electronBuilder: {
			mainProcessFile: 'src/background/main.js',
			rendererProcessFile: 'src/renderer/main.js',
		},
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@Layouts': path.resolve(__dirname, 'src/components/Layouts/'),
				'@Inputs': path.resolve(__dirname, 'src/components/Input/'),
				'@r': path.resolve(__dirname, 'src/renderer/'), //renderer
			},
		},
	},
};
