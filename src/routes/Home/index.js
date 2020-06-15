import React, { useState, useEffect } from 'react';
import { BoxLoading } from 'react-loadingg';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import { Grid } from './styles';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataFiltered, setDataFiltered] = useState([]);
  const searching = useSelector((state) => state.sidebar.searching);
  useEffect(() => {
    const fetchData = async () => {
      const products = await (await (fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'))).json();
      setData(products);

      setLoading(false);
    };
    fetchData();
  }, []);
  const filterData = () => searching && setDataFiltered(data.filter((productFiltered) => productFiltered.name.toLowerCase().includes(searching.toLowerCase())));

  useEffect(() => filterData, [searching]);

  return (
    <Grid>
      {loading ? <BoxLoading size={160} />
        : searching
          ? dataFiltered.map((prod) => <Card product={prod} key={prod.code_color} />)
          : data.map((prod) => <Card product={prod} key={prod.code_color} />)}

    </Grid>
  );
}

export default Home;
