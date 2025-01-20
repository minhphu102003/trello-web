import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import PropTypes from 'prop-types'

function ListColumns({ columns }) {

  return (
    <Box
      sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ced0da',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#bfc2cf',
        },
        '&::-webkit-scrollbar-track': {
          m: 2,
        },
      }}
    >
      {columns?.map((column) => {
        return <Column column={column} key={column._id} />
      })}

      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff3d'
        }}
      >
        <Button startIcon={<NoteAddIcon />}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}>
          Add new column
        </Button>
      </Box>
    </Box>
  );
}

ListColumns.propTypes = {
  columns: PropTypes.shape({
    column: PropTypes.object.isRequired
  }).isRequired
}

export default ListColumns
