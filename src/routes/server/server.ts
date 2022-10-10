import app from '../../../src/server';
import File from '../../file'

const port = 3000;


app.listen(port, async () => {
    await File.createThumbPath();
    console.log(`server running on port: ${port} 🤓`)
});
