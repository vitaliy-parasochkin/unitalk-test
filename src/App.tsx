import Table from './components/Table.tsx';
import {Typography} from '@mui/material';

function App() {
  return (
    <div>
      <Typography sx={{my: 4}} variant="h4">
        Оператори
      </Typography>
      <Table />
    </div>
  );
}

export default App;
