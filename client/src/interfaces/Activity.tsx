export interface Activity {
  id: string;
  name: string;
  image: string;
  dates: string[];
  times: string[];
  description?: string;
}

export interface ActivityFormValues {
  name: string;
  middleName?: string;
  lastName: string;
  country: string;
  date: string;
  time: string;
  image?: string;
  selectedActivity?: SelectedActivity
}

export interface SelectedActivity {
  id: string;
  name: string;
}

export interface BookModalProps {
  selectedActivity: string | null;
  closeModal: () => void;
  postActivity: (formValues: ActivityFormValues) => void;
}