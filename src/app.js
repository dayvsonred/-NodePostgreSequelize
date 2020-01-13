import express, {json} from 'express';
import morgan from 'morgan';

//import routers
import projectRoutes from './routes/projects';
import projectTasks from './routes/tasks';
import projectGoogleOauth from './routes/googleoauth';
import projectOauth2callback from './routes/oauth2callback';
var cors = require('cors')

const app  = express();
 
app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', projectTasks);
app.use('/api/url', projectGoogleOauth);
app.use('/api/oauth2callback', projectOauth2callback);

export default app;