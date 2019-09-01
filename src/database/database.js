import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'GFSys',
    'postgres',
    'dayvsonred',
    { 
        host:'localhost', 
        dialect: 'postgres', 
        pool:{
            max : 5 , 
            min: 0, 
            require : 3000, 
            idle:10000
        }, 
        logging : false
    }
);