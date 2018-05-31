import Sequelize from 'sequelize';
import Repository from '../schema/repository.js';

const Op = Sequelize.Op;

export const queryRepository = async (query) => {
	const {keyword, author} = query;
	const result = await Repository.findAll({
		where: {
			repoName: {
				[Op.like]: `%${keyword}%`
			},
			createUser: {
				[Op.like]: `%${author}%`
			}
		}
	});
	return result;
};