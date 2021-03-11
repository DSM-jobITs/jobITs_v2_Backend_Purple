import 'module-alias/register';
import app from './config/app';

const PORT = 3002;

app.listen(PORT, () => console.log(`server open on ${PORT} port !!!`));
