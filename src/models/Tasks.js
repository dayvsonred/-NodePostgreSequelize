import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const telefone =  sequelize.define('telefone',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey:  true
    },
    users : {
        type : Sequelize.INTEGER
    },
    numero: {
        type:Sequelize.TEXT
    }

}, {timestamps : false} );



export default telefone;