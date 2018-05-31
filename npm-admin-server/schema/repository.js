import Sequelize from 'sequelize';
import sequelize from '../util/database.js';

// https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/models-definition.md
export default  sequelize.define('repository', {
		repoCode: {
			type: Sequelize.STRING,
			field: 'repo_code'
		},
		repoName: {
			type: Sequelize.STRING,
			field: 'repo_name'
		},
		repoType: {
			type: Sequelize.INTEGER,
			field: 'repo_type'
		},
		repoGit: {
			type: Sequelize.STRING,
			field: 'repo_git_url'
		},
		repoDesc: {
			type: Sequelize.STRING,
			field: 'repo_desc'
		},
		repoAuthor: {
			type: Sequelize.STRING,
			field: 'repo_author'
		},
		disabled: {
			type: Sequelize.INTEGER,
			field: 'disabled'
		},
		createUser: {
			type: Sequelize.STRING,
			field: 'created_by'
		},
		createTime: {
			type: Sequelize.DATE,
			field: 'created_time'
		},
		modifyUser: {
			type: Sequelize.STRING,
			field: 'modify_by'
		},
		modifyTime: {
			type: Sequelize.DATE,
			field: 'modify_time'
		}
	}, {
	// 禁用修改表名; 默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数。 如果你不想这样，请设置以下内容
	freezeTableName: true,

    // 定义表的名称
    tableName: 's_npm_repository',

	// 添加时间戳属性 (updatedAt, createdAt)
	timestamps: true,

	// 我想 createdAt 实际上被称为 created_time
	createdAt: 'created_time',

	// 我想 updatedAt 实际上被称为 modify_time
	updatedAt: 'modify_time',

	// 不删除数据库条目，但将新添加的属性deletedAt设置为当前日期（删除完成时）。
    // paranoid 只有在启用时间戳时才能工作
    paranoid: false
});