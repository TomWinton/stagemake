import { Sequelize , DataType, Dialect} from 'sequelize'
import {sqlite3} from 'sqlite3'

export class dbCon
{
    con: Sequelize;
    TestConnection : ( con: Sequelize) => void;
constructor()
{
  //C:\Users\TomWinton\source\repos\Konva\ts\node_modules\sequelize\lib\dialects\sqlite
  //  this.con= new Sequelize({
  //       dialect: "sqlite",

  //       storage: "./assets/db.db"
  //   });

    this.TestConnection = this.testConnection.bind(this.con);
}


private testConnection = ( con: Sequelize) => 
{
    console.log(con);
    try {
        con.authenticate();
       console.log('Connection has been established successfully.');
     } catch (error) {
       console.error('Unable to connect to the database:', error);
     }
}
}


