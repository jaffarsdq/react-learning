import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'
import useUserProfile from '../../hooks/useUserProfile';

export default function UserDetails() {
  const [loading,user] = useUserProfile();
  if(loading) {
    return <div >loading...</div>
  } else {
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
