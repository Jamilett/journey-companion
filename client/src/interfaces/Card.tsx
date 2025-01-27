import { SelectedActivity } from './Activity';

export interface CardProps {
  id: string;
  name: string;
  imageUrl: string;
  onClick: (selectedActivity: SelectedActivity) => void;
}
