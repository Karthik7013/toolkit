import { Box, Toolbar, Container, Grid, Typography, Card, Skeleton, CardHeader } from "@mui/material";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initialStateProps, productProps } from "./types/propTypes";
import axios from "axios";
import { actions } from "./redux/store";



export default function App() {
  const dispatch = useDispatch();
  const products = useSelector((state: initialStateProps) => state.products);

  const p = useSelector((state: initialStateProps) => state);
  console.log(p)

  const getProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    dispatch(actions.getProducts(res.data))
  };

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Box>
      <Header />
      <Container sx={{ height: '100dvh', overflowY: "scroll", p: 1 }}>
        <Toolbar />
        <Typography gutterBottom variant="h6">Showing {products.length} Results</Typography>


        <Grid container spacing={5}>




          {products.map((product: productProps) => {
            return <ProductCard data={product} />
          })}
        </Grid>
      </Container>
    </Box >
  )
}
