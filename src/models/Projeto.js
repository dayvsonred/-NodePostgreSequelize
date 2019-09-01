import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import telefone from './Tasks';

const users =  sequelize.define('users',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey:  true
    },
    nome : {
        type : Sequelize.TEXT
    },
    senha: {
        type:Sequelize.TEXT
    }

}, {timestamps : false} );

users.hasMany(telefone, {foreignKey : 'users', sourceKey : 'id'} );
telefone.belongsTo(users, {foreignKey : 'usesr', sourceKey: 'id'} );

export default users;