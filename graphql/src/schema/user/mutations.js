export default {
    Tenzor_User_Register: async( _source, { input: { firstName, lastName, email } }, { dataSources } ) => {
        return dataSources.userAPI.register( firstName, lastName, email )
    },
}
