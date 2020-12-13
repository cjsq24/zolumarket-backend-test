import express from "express"
import cors from "cors"
import bodyParser from 'body-parser'
import morgan from 'morgan'
import "dotenv/config.js"
import db from './db.js'
import routes from './modules/routes.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/api',routes)

app.listen(process.env.PORT, async () => {
	try {
		console.log(`Server on port ${process.env.PORT}`)  
		await db.authenticate();
		console.log('Connection db has been established successfully.');
		//await db.sync({ force: false });
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})