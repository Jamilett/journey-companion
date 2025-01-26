import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardProps } from '../interfaces/Card';

const ActivityCard = ({ title, imageUrl, onClick }: CardProps) => {

  const handleClick = () => {
    if (onClick) {
      onClick(title);
    }
  };

  return (
    <>
      <Card id="card-container">
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat modi blanditiis nam. Reiciendis, illum nam! Qui quasi error, magni, consequatur ab, incidunt culpa fugit laudantium tempora nobis animi reprehenderit.
          </Typography>
        </CardContent>
        <CardActions>
          <Button type='submit' size="small" color="primary" onClick={handleClick}>
            Book now
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
export default ActivityCard;