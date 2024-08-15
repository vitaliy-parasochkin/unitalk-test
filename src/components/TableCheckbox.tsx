import {Box, Checkbox} from '@mui/material';

function TableCheckbox({value}: {value: boolean}) {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Checkbox defaultChecked={value} />
    </Box>
  );
}

export default TableCheckbox;
