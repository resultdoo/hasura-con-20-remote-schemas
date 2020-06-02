import { mergeTypes } from 'merge-graphql-schemas'

import * as types from './types.gql'
import * as operations from './operations.gql'
import * as inputs from './inputs.gql'

const userSchema = mergeTypes( [
	types,
	operations,
	inputs,
] )

export default userSchema