export default {
    Tenzor_User: async( _source, { input: { id } }, { dataSources } ) => {
        return dataSources.userAPI.getByID( id )
    },
}