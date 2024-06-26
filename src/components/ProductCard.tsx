import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Toolbar, Typography } from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const ProductCard = ({ data }: any) => {
    console.log(data)
    return (
        <Grid item xs={6} md={4}>
            <Card sx={{ maxHeight: '600px' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={data.image}
                />
                <CardContent>
                    <Typography noWrap gutterBottom variant="h6" component="div">
                        {data.title}
                    </Typography>
                    <Typography noWrap variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                </CardContent>
                <CardActions>

                    <Button color='success' variant='contained'>
                        <CurrencyRupeeIcon sx={{ fontSize: '16px' }} />
                        {data.price}
                    </Button>

                    <Rating
                        size='small'
                        value={data.rating.rate}
                        name="simple-controlled"
                    />


                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProductCard