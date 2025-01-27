import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardProps } from '../interfaces/Card';

const ActivityCard = ({ id, name, imageUrl, onClick }: CardProps) => {

  const handleClick = () => {
    if (onClick) {
      onClick({ name: name, id: id });
    }
  };

  return (
    <>
      <Card id="card-container">
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" style={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat modi blanditiis nam. Reiciendis, illum nam! Qui quasi error, magni, consequatur ab, incidunt culpa fugit laudantium tempora nobis animi reprehenderit.
          </Typography>
        </CardContent>
        <CardActions>
          <Button type='submit' size="small" style={{ background: '#1976d2', color: 'white' }} onClick={handleClick}>
            Book now
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
export default ActivityCard;