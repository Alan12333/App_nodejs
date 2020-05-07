const express = require('express');
const router = express.Router();
const mysqli = require('../Database/db');


router.get('/', (req, res) => {
    mysqli.query('SELECT * FROM estudiante ',(err,rows,fields)=>{
        if(!err)
        {
             res.json(rows);
        }
        else{
            console.log(err);
        }
    })
});

router.get('/:id', (req, res) => {
    const{id}=req.params;
    mysqli.query('SELECT * FROM estudiante WHERE idEstudiante=?',[id],(err,rows,fields)=>{
        if(!err)
        {
             res.json(rows);
        }
        else{
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const{nombre,edad,fecha_n}=req.body;
    mysqli.query("INSERT INTO estudiante(Nombre, Edad, Fecha_N)VALUES(?,?,?)",[nombre, edad,fecha_n],(err,rows,$fiels)=>{
        if(!err)
        {
             res.json({status:"Estudiante Alamcenado"});
        }
        else{
            console.log(err);
        }
    })
});

router.put('/:id', (req, res) => {
    const{nombre,edad}=req.body; 
    const {id} = req.params;
    mysqli.query("UPDATE estudiante SET Nombre=?, Edad=? WHERE idEstudiante=?",[nombre,edad,id],(err,rows,field)=>{
        if(!err)
        {
             res.json(({status:"El usuario se ha actualizado"}));
        }
        else{
            console.log(err)
        }
    })

});

router.delete('/:id', (req, res) => {
    const {id}=req.params;
    const query="DELETE FROM estudiante WHERE idEstudiante=?";
    mysqli.query(query,[id],(err,rows,fields)=>{
        if(!err)
        {
             res.json({status:"Se ha eliminado el estudiante"});
        }
        else
        {
            console.log(err);
        }
    })
});
module.exports = router;