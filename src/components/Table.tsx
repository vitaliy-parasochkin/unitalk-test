import {DataGrid, GridColDef, GridToolbarQuickFilter} from '@mui/x-data-grid';
import {fetchDataPending} from '../store/slices/dataSlice.ts';
import {useAppDispatch, useAppSelector} from '../hooks';
import {getTableDateTime} from '../utils/functions';
import TableCheckbox from './TableCheckbox.tsx';
import TableAvatar from './TableAvatar.tsx';
import {PaginationType} from '../types';
import React, {useEffect} from 'react';
import {Box} from '@mui/material';

const Table: React.FC = () => {
  const [paginationModel, setPaginationModel] = React.useState<PaginationType>({
    pageSize: 5,
    page: 0,
  });
  const dispatch = useAppDispatch();
  const {data, isLoading} = useAppSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchDataPending());
  }, [dispatch]);

  const columns: GridColDef[] = [
    {field: 'id', headerName: '#', width: 50},
    {
      field: 'name',
      headerName: 'Користувач',
      width: 250,
      renderCell: params => (
        <Box sx={{display: 'flex', alignItems: 'center', columnGap: 1}}>
          <TableAvatar src={params.row.avatar} alt={'test image'} />
          {params.value}
        </Box>
      ),
    },
    {
      field: 'isWorking',
      headerName: 'Працює',
      type: 'boolean',
      width: 110,
      renderCell: params => <TableCheckbox value={params.value} />,
    },
    {
      field: 'createdAt',
      headerName: 'Дата / Час створення',
      type: 'dateTime',
      width: 200,
      valueFormatter: getTableDateTime,
    },
    {
      field: 'text',
      headerName: 'fieldName[]',
      flex: 1,
      valueFormatter: value => value || '---',
    },
  ];

  function QuickSearchToolbar() {
    return (
      <Box
        sx={{
          p: 1,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter variant="standard" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2)',
      }}
    >
      <DataGrid
        loading={isLoading}
        rows={data}
        columns={columns}
        slots={{toolbar: QuickSearchToolbar}}
        pageSizeOptions={[5, 10, 20, 50]}
        autoHeight
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </Box>
  );
};

export default Table;
