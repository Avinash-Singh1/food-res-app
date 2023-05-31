import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

function List() { 
  const classes = useStyles();
  const [type, setType]=useState("restaurants");
  const [rating, setRating]=useState();
  const places =  [
    {name: 'Coll Place'},
    {name: 'Best Place'},
    {name: 'Best Beer'},
    {name: 'Coll Place'},
    {name: 'Best Place'},
    {name: 'Best Beer'},
    {name: 'Coll Place'},
    {name: 'Best Place'},
    {name: 'Best Beer'}
  ];

  return (
    <div className='={classes.container'>
       <Typography variant='h4'>Restaurants, Hotels & Attraction around you</Typography>

       {/* drop down 1 */}

       <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e)=>setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
       </FormControl>

       {/* drop down 1 */}

       <FormControl className={classes.formControl}>
          <InputLabel>Rating</InputLabel>

          <Select value={type} onChange={(e)=>setType(e.target.value)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
       </FormControl>

       <Grid container spacing={3} className={classes.list} >
        {places?.map((place,i)=> (
            <Grid item key={i} xs ={12}>
                <PlaceDetails place={place}/>
            </Grid>
        ))}
       </Grid>
    </div>
  )
}

export default List