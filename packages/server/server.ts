import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

export async function startServer(port: number) {
	const app = express();
	app.use(cors());

	// Middleware для запрета кэширования
	app.use((req, res, next) => {
		res.set('Cache-Control', 'no-store');
		next();
	});

	app.get('/ping', (_, res) => {
		res.json({
			message: 'pong',
			timestamp: Date.now(),
		});
	});

	app.use('*', (_, res) => {
		res.send('👋 Howdy from the server :)');
	});

	app.listen(port, () => {
		console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
	});
}
