import express from 'express'
import morgan from 'morgan'

const app = express()
import productRoutes from './routes/producto.routes'

//settings
app.set('port', process.env.PORT || 3000);
app.use(productRoutes)
app.use(morgan('dev'))

export default app

//crear un app.js ayuda ha realizar el testing