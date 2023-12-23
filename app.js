//Server
const express = require("express")
//const collection = require("./mongo")
const { usersCollection, orderCollection } = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', cors(), (req,res)=>{

})


app.post('/register', async(req, res)=>{
    try{
        //parse data from register
        const { email, password } = req.body;
        const emailExist = await usersCollection.findOne({email:email})
        if(emailExist)
            res.json('exists');
        else{
        const newUser = new usersCollection({
            email,
            password
        })
        await newUser.save();
        res.json('notexists');

    }
    }
    catch(e){
        console.log(e);
    }
})

app.post('/payment', async(req, res)=>{
    try{
        const {email,area, car, price, orderNO} = req.body;
        const newOrder = new orderCollection({
            email,area,car,price, orderNO
        })
        await newOrder.save();
    }
    catch(e){
        console.log(e);
    }
})

app.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        //Query for email and return document
        const user = await usersCollection.findOne({ email });
        if (!user) {
            res.json('email not found');
            return;
        }
        if (password === user.password) {
            res.json('ok');
        } else {
            res.json('not ok');
        }
    } catch (e) {
        console.log(e);
        res.json('error');
    }
});





app.listen(8000, ()=>{
    console.log('server is running :)');
})