

const db = require('../db/DbConnection'); // Example: const db = mysql.createConnection({...});
var query = 'SELECT * FROM users';
const GetUsers=(req,res)=>{
    console.log('calling');
    var {email_id,password}=req.query
    console.log(req.body);
    // query=`SELECT * FROM users WHERE user_id="${email_id}"`
    db.query(query,(err, results)=>{
        console.log(results);
        if(err)console.log(err);
        if(results.length !==0){
            if(results[0].user_id==email_id){
                if(results[0].password==password){
                    res.status(200).json({ status: 'success', message: 'Users Get successfully',results });
                }else{
                    res.json({ status: 'failer', message:'Wrong Password' });
                }
            }else{
                res.json({ status: 'failer', message:'Wrong Username' });
            }
        }else{
            res.json({ status: 'failer', message:'No User Found' });

        }
    })
}

const Testing=(req,res)=>{
    res.send('working')
}
module.exports={
    GetUsers,
    Testing
}