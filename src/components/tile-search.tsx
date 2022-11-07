import React, { useState, useMemo, FC } from 'react';
import styles from './tile-search.module.css';
import {
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { debounce } from 'lodash';
import { motion, AnimatePresence } from 'framer-motion';

export declare type TileItem = {
  id: number,
  name: string;
  cardImageUrl: string;
  description: string;
  url: string;
}
declare type TileSearchProps = {
  label: string,
  items: TileItem[]
}

declare type TileSearchItemProps = {
  item: TileItem
}

function TileSearchItem({ item }: TileSearchItemProps) {
  return (<motion.div
    className={styles.tileSearchItem}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    layout>
    <Card sx={{ width: 250, height: 250 }}>
      <CardMedia
        component="img"
        image={`/img/${item.cardImageUrl}`}
        height="100"
        width="250"
        alt={`${item.name}`}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {item.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {item.description}
        </Typography>
      </CardContent>
      {item.url ?
        <CardActions>
          <Button href={`/${item.url}`}>Goto</Button>
        </CardActions>
        : ''}
    </Card>
  </motion.div>);
}

export default function TileSearch({ label, items }: TileSearchProps) {
  const [filteredItems, setFilteredItems] = useState(items);
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(`filter items based on text: ${event.target.value}`);
    setFilteredItems(items.filter((i) => i.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())));
  }
  const textChange = useMemo(() => debounce(changeHandler, 300), []);
  return (<>
    <Grid container direction='row' justifyContent='center' alignItems='center' className='padding-bottom--lg'>
      <TextField
        className=''
        label={`${label}`}
        onChange={textChange} />
    </Grid>
    {
      filteredItems.length > 0 ?
        <motion.div layout className={styles.tileSearchGrid}>
          <AnimatePresence>
            {filteredItems.map(i => (<TileSearchItem item={i} key={i.id} />))}
          </AnimatePresence>
        </motion.div> :
        <div>No matching result</div>
    }
  </>)
}