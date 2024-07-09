import { format } from 'date-fns';

const formatDate = (date) => {
  console.log(date);
  return format(new Date(date), 'dd-MM-yyyy');
};

export { formatDate };
