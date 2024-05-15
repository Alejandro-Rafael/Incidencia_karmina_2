let mysql=require('../../BD/mysql')//requerimos el archivo que contiene la conexion a la base de datos

module.exports={

    validar_user:(req,res)=>{

        let dato=req.params.user;

        mysql.query(`select nombre, usuario, contraseña from users where usuario='${dato}'`, function(err,result,fields){

            if(err){
                res.json(err)

            }else{
                res.json(result)
            }
        })


    }

}