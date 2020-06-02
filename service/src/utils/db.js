import mongoose from 'mongoose'

const connect = () => {
    const { DB_URL, DB_PORT, DB_DATABASE } = process.env
    const connectionString = `mongodb://${ DB_URL }:${ DB_PORT }/${ DB_DATABASE }`
    return mongoose.connect( 
        connectionString, 
    )
}

export default connect