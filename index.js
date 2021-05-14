const express = require("express");
const MercadoPago = require("mercadopago");
const app = express();

MercadoPago.configure({
    sandbox: true,
    access_token: "TEST-7869168471418513-051322-05b3c27bae58be16aabf08170b74e3ec-378547084"
});

app.get("/", (req,res) => {
 res.send("Olá Mundo!");


});

app.get("/pagar", async (req,res) => {

 var id = ""  + Date.now();   
 var emailDoPagador = "angelofe@gmail.com";

var dados = {
items: [
    item = {
        id: id,
        title: "2x video games;3x camisas",
        quantity:1,
        currency_id: 'BRL',
        unit_price: parseFloat(150)
    }
],
payer: {
email:emailDoPagador

},

external_reference: id,

}

try{
    var pagamento = await MercadoPago.preferences.create(dados);
    console.log(pagamento);
return res.redirect(pagamento.body.init_point);


}catch(err){

    return res.send(err.message);

}

});

app.listen(3000, (req , res) => {

 console.log("servidor Rodando");

});