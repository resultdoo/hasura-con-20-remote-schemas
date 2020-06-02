import { RESTDataSource } from "apollo-datasource-rest"

class UserDataSource extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = "http://hasuracon20_result_user_service:8080/"
	}

	async getByID( id ) {
		return this.get( `user/${ id }` )
	}

	async register( firstName, lastName, email ) {
		const data = await this.post(
			`user`,
			{
				firstName,
				lastName,
				email
			}
		)
		return data
	}

}

export default UserDataSource
