import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid  xs={5} container marginTop={'5px'} justifyContent={'end'} alignContent={'start'}>
            {/* users */}
            <UserList></UserList>
        </Grid>
        <Grid container alignContent={'start'} marginTop={'5px'} direction={'column'} xs={6}>
          <PostCardList/>
        </Grid>
      </Grid>
    </Box>
  );
}