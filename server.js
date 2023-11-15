const express = require ('express');
const dotenv = require('dotenv').config();
const app = express();
const postsController = require('./controller/postsController');
const postsRouter = require('./routers/post'); 
const routeNotFoundMiddleware = require('./middlewares/routeNotFound');
const errorFormatters = require('./middlewares/errorsFormatter');
const authRouter = require('./routers/auth');

// application/json
app.use(express.json());
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//home
app.get('/', postsController.home)
app.use('/auth', authRouter )

app.use('/posts', postsRouter);
app.use(routeNotFoundMiddleware);
app.use(errorFormatters);

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})