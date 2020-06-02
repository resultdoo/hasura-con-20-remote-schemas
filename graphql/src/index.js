import {
	ApolloServer,
} from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { createServer } from 'http'
import express from 'express'
import config from 'config'
import bodyParser from 'body-parser'

import { resolvers, typeDefs } from './schema'
import { UserAPI } from "./datasources"

const app = express()

app.use( '/graphql', bodyParser.json( { limit: '10mb' } ) )

const schema = makeExecutableSchema( {
	typeDefs,
	resolvers,
} )

const server = new ApolloServer( {
	schema,
	dataSources: () => ( {
		userAPI: new UserAPI(),
	} ),
} )

server.applyMiddleware( { app, path: '/graphql' } )

const httpServer = createServer( app )

httpServer.listen( config.get( 'port' ), () => {
	console.log(
		`Hasura Con 20 Result GraphQL Server successfully started on port ${ config.get(
			'port'
		) }.`
	)
} )