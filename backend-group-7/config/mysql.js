import { Sequelize } from 'sequelize';

/*Database credentials should be gotten from dotenv */
const databaseName = '';
const databaseUserName = '';
const databasePassword = '';

const sequelize = new Sequelize(databaseName, databaseUserName, databasePassword, {
    host: '127.0.0.1',
    dialect: 'mysql'
});

export const connectMysql = ()=>{
    try{
        sequelize.authenticate();
        sequelize.sync()
    } catch(error) {
        console.error(error.message);        
     }
}

export default sequelize;