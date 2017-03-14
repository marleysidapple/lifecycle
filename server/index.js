import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});


app.listen(7000, () => {
	console.log('running on 7000');
});