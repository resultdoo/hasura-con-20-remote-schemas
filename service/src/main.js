import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from 'config'
import { createServer } from 'http'
import swaggerUi from 'swagger-ui-express'

import log from './log'
import routes from './routes'
import { swagDocHandler, errorHandle, db } from './utils'

require( 'dotenv' ).config()

process.on( 'unhandledRejection', ( err ) => {
	throw err
} )

process.on( 'uncaughtException', ( err ) => {
	log.error( 'uncaughtException:', err )
} )

const app = express()

const server = createServer( app )

app.use( cors( '*' ) )
app.use(
	'/docs',
	swaggerUi.serve,
	bodyParser.json(),
	swaggerUi.setup( swagDocHandler ),
)

app.use(
	bodyParser.json( {
		limit: '1mb',
	} ),
)

app.use( '/', routes )

app.use( errorHandle )

const port = config.get( 'port' )

db().then( async () => {
	server.listen( port, () => {
		log.info( `Hasura Con 20 Result User Service started on port ${ port }.` )
	} )	
} );
