import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';


let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './../public/index.html'));
});


app.listen(7000, () => {
	console.log('running on 7000');
});