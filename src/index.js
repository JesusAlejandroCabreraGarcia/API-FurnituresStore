import app from './app.js';
import "./database.js"
app.get("/getAll",(req,res)=>{
    res.json({message:"Hola desde la maquina de Alejandro 😴"})
});

app.listen(app.get("port"),()=>{
    console.log("server on port", app.get("port"));
});