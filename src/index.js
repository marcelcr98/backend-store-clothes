import express from 'express'
import morgan from 'morgan'

const app = express()
import productRoutes from './routes/producto.routes'

//settings
app.set('port', process.env.PORT || 3000);
app.use(productRoutes)
app.use(morgan('dev'))

//init the app
app.listen(app.get('port'));
console.log("Server en puerto",app.get("port"));


