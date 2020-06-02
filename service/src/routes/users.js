import express from 'express'

import { User } from '../models'
import log from '../log'

const router = new express.Router()

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get user.
 *     description: Get user by ID.
 *     tags:
 *       - User
 *     parameters:
 *       - name: id
 *         description: ID of user
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.get( '/:id', async ( req, res, next ) => {
    log.info( `Fetching user by id ... `, req.params, req.headers )

	const id = req.params.id

	try {
		let user = await User.findById( id )
		return res.send( user )
	} catch ( e ) {
		log.error( `An error occured: `, e )
		return next( {
			msg: e
		} )
	}
} )

/**
 * @swagger
 * /user:
 *   post:
 *     tags:
 *       - User
 *     summary: Register new user
 *     description: Adds new user.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Register new user.
 *         description: User parameters defined by schema on GraphQL.
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: User registered.
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.post( '/', async ( req, res, next ) => {
    log.info( `Creating new user ... `, req.body, req.headers )

    const { firstName, lastName, email } = req.body

	try {
		let user = new User( {
			firstName,
			lastName,
			email,
		} )
		await user.save()

		return res.send( user )
	} catch ( e ) {
		log.error( `An error occured: `, e )
		return next( {
			msg: e
		} )
	}
} )

export default router