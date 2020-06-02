import path from 'path'
import swagger from 'swagger-jsdoc'

const swaggerDefinition = {
	info: {
		title: 'Hasura Con 20 Result User Service',
		version: '1.0.0',
		description: 'A simple user service on express.',
	},
}

const options = {
	swaggerDefinition,
	apis: [
		path.resolve( 'src/routes/**/*.js' ),
		path.resolve( 'src/models/**/*.js' ),
	],
}

const swaggerSpec = swagger( options )

export default swaggerSpec
