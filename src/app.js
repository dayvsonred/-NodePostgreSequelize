import express, {json} from 'express';
import morgan from 'morgan';

//import routers
import projectRoutes from './routes/projects';
import projectTasks from './routes/tasks';

const app  = express();

app.use(morgan('dev'));
app.use(json());
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', projectTasks);




export default app;