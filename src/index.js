import app from './app'
import './database'

//init the app
app.listen(app.get('port'));
console.log("Server en puerto",app.get("port"));


