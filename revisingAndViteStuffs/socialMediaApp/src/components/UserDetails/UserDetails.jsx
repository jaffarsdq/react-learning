import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import fetchUser from '../../helpers/fetchUser';

export default function UserDetails() {
  // const [loading,user] = useUserProfile();

  const {userId} = useParams();
  const response = useQuery(["user",userId],fetchUser);

  if(response.isLoading) {
    return <div >loading...</div>
  } else {
    const user = response.data.data;
    return (
      <Card sx={{ maxWidth: 200, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          sx={{borderRadius:50}}
          component="img"
          height="200"
          image= {user.picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.firstName +" " + user.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
       
    );
  }
}
