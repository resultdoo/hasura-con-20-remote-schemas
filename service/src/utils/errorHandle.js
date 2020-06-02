import log from '../log'

export default function ( err, req, res ) {
	const error = {}
	error.msg = err.msg || err.message || 'Unknown reason'
	error.code = err.code || 'UNKNOWN_CODE'
	const status = err.status || '400'
	const requestId = 'Unknown request ID'
	log.error( `[ ${ requestId } ] - ${ error.msg }`, req.body, req.headers )
	return res.status( status ).send( error )
}
