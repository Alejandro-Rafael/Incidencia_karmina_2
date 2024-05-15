let controllerbd=require('../CONTROLLERS/ctrl_usuarios');//se establece conexion con los controladores para hacer uso de ellos
var router=require('express').Router();//se define router para que una pagina pueda accedere a la ruta

//esta ruta de tipo "get" usa el controlador "listar_tipos_incidencias"
router.get('/:user',function(req,res){

    controllerbd.validar_user(req,res);

})

//exportamos la rutas para que puedan ser usadas
module.exports=router