import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

import {
	schema as userSchema,
	resolvers as userResolvers,
} from './user'

const typeDefs = mergeTypes( [
	userSchema,
] )

const resolvers = mergeResolvers( [
	userResolvers,
] )

export { typeDefs, resolvers }