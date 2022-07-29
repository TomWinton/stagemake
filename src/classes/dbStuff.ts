// import { Sequelize } from "sequelize";
// export class dbCon
// {
//     con: Sequelize;
//     TestConnection : ( con: Sequelize) => void;
// constructor()
// {
//    this.con= new Sequelize({
//         dialect: "sqlite",
//         storage: "./assets/db.db"
//     });
//     this.TestConnection = this.testConnection.bind(this.con);
// }


// private testConnection = ( con: Sequelize) => 
// {
//     console.log(con);
//     try {
//         con.authenticate();
//        console.log('Connection has been established successfully.');
//      } catch (error) {
//        console.error('Unable to connect to the database:', error);
//      }
// }
// }


