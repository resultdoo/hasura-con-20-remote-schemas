import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    }
})

UserSchema.options.toJSON = UserSchema.options.toJSON || {}
UserSchema.options.toJSON.transform = ( doc, ret ) => {
	ret.id = ret._id
	return ret
}

const User = mongoose.model( 'user', UserSchema )

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       _id:
 *         type: string
 *         default: objectId
 *       firstName:
 *         description: First name of user.
 *         type: string
 *         required: true
 *       lastName:
 *         description: Last name of user.
 *         type: string
 *         required: true
 *       email:
 *         description: Email of user.
 *         type: string
 */

export default User