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
import Link from '@docusaurus/Link';

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


function ValkCardMedia(props) {
  return (
    <div className={`${props.className ? props.className : ''} ${styles.valkCardMedia}`}>
      <img height={props.height} src={props.src} alt={props.alt} />
    </div>
  )
}

function TileSearchItem({ item }: TileSearchItemProps) {
  return (<motion.div
    className={styles.tileSearchItem}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    layout>
    <Link href={item.url} className={styles.cardLink}>
      <Card className={styles.card} raised={true}>
        <CardContent>
          <ValkCardMedia src={`/img/${item.cardImageUrl}`} alt={`${item.name}`} height="100" />
          <Typography gutterBottom variant='h5' component='div'>
            {item.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  </motion.div>);
}

export function TileSearch({ label, items }: TileSearchProps) {
  const [filteredItems, setFilteredItems] = useState(items);
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(`filter items based on text: ${event.target.value}`);
    setFilteredItems(items.filter((i) => i.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())));
  }
  const textChange = useMemo(() => debounce(changeHandler, 300), []);
  return (<>
    <div className={styles.searchWrapper}>
      <TextField
        label={`${label}`}
        onChange={textChange}
      />
    </div>
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