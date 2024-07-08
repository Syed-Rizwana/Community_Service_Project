const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "manager",
  connectString: "localhost:1521/ORCL",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
  if(Parameters[0]=='login'){
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.email}','${Details.password}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set email = '${Parameters[3].email}' where email = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
      break;
    case "Read":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where email = '${Details}'`;
        }
      
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
}
else{
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.email}','${Details.Review}','${Details.Ratings}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', email = '${Parameters[3].email}',Review = '${Parameters[3].Review}',Ratings = '${Parameters[3].Ratings}' where email = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
      break;
    case "Read":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where email = '${Details}'`;
        }
      
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }

}
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};
module.exports = Result;