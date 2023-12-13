// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'src/store/apps/invoice'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import TableHeader from './TableHeader'
import CustomTextField from 'src/@core/components/mui/text-field'
import { Button } from '@mui/material'

// ** Styled Components

// ** Styled component for the link in the dataTable
const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: theme.typography.body1.fontSize,
  color: `${theme.palette.primary.main} !important`
}))



const defaultColumns = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 100,
    headerName: 'ID',
    renderCell: ({ row }) => (
      <Typography component={LinkStyled} href={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Typography>
    )
  },

  {
    flex: 0.1,
    minWidth: 100,
    field: 'cityAr',
    headerName: 'city AR',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>cairo</Typography>
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: 'cityEn',
    headerName: 'city en',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>cairo</Typography>
  },
  {
    flex: 0.15,
    minWidth: 100,
    field: 'CreatedAt',
    headerName: 'Created at',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>19/2/2023</Typography>
  },
  {
    flex: 0.15,
    minWidth: 100,
    field: 'isActive',
    headerName: 'isActive',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>isActive</Typography>
  }

]

/* eslint-enable */
const City = () => {
  // ** State
  const [dates, setDates] = useState([])
  const [value, setValue] = useState('')
  const [selectedRows, setSelectedRows] = useState([])
  const [statusValue, setStatusValue] = useState('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.invoice)
  useEffect(() => {
    dispatch(
      fetchData({
        dates,
        q: value,
        status: statusValue
      })
    )
  }, [dispatch, statusValue, value, dates])

  const handleFilter = val => {
    setValue(val)
  }

  const columns = [
    ...defaultColumns,
    {
      flex: 0.1,
      minWidth: 100,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title='Delete city'>
            <IconButton size='small' sx={{ color: 'text.secondary' }} onClick={() => dispatch(deleteInvoice(row.id))}>
              <Icon icon='tabler:trash' />
            </IconButton>
          </Tooltip>
          <Tooltip title='edit'>
            <IconButton
              size='small'
              component={Link}
              sx={{ color: 'text.secondary' }}
              href={`/apps/invoice/preview/${row.id}`}
            >
              <Icon icon='tabler:edit' />
            </IconButton>
          </Tooltip>

        </Box>
      )
    }
  ]

  return (

      <Grid container spacing={6}>
        <Grid item xs={12}>
        <Box
      sx={{
        py: 4,
        px: 6,
        rowGap: 2,
        columnGap: 4,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* <Button color='secondary' variant='tonal' startIcon={<Icon icon='tabler:upload' />}>
        Export
      </Button> */}
      <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap' }}>
        <Button variant='contained' sx={{ '& svg': { mr: 2 } , float:'left' }}>
          <Icon fontSize='1.125rem' icon='tabler:plus' />
          Add New city
        </Button>
      </Box>
    </Box>
        </Grid>
        <Grid item xs={12}>
          <Card>

            <DataGrid
              autoHeight
              pagination
              rowHeight={62}
              rows={store.data}
              columns={columns}
              checkboxSelection
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              onRowSelectionModelChange={rows => setSelectedRows(rows)}
            />
          </Card>
        </Grid>
      </Grid>
  )
}

export default City
