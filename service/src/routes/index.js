import express from 'express'

import users from './users'

const router = new express.Router()

router.get( '/', async ( req, res ) => {
	res.send( { msg: 'Invalid request.' } )
} )

router.use( '/user', users )

export default router
