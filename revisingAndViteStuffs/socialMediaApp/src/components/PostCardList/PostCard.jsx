import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function PostCard({content, image, authorFirstName, authorSecondName, publishDate}) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {authorFirstName.substring(0,1)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={authorFirstName +" "+ authorSecondName}
          subheader={publishDate.substring(0,10)}
        />
        {
          (image.length > 0) ?(<CardMedia
            component="img"
            height="194"
            image={image}
            alt="Paella dish"
          />) : null
        }
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
}