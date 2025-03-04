import { Grid, GridProps } from '@mui/material';

const Item = ({ ...props }: GridProps) => <Grid item {...props} />;
const Container = ({ ...props }: GridProps) => <Grid container {...props} />;

export { Item, Container };
