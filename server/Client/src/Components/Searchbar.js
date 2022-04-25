import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase,makeStyles } from '@material-ui/core';
import { fontFamily, fontSize, fontWeight } from '@mui/system';
const useStyles=makeStyles((theme) => ({
    search:{
    backgroundColor: 'white',
    borderRadius:'0px',
    marginLeft: '13px',
    marginLeft: '13px',
    width: '44%',
    height:'36px',
    display:'flex',
    marginBottom:'9px'
  },
    searchIcon:{
        padding: theme.spacing(0, 2),
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:'#2874f0',
    },    
  inputRoot:{
    color: 'black',
    width:'100%',
    fontSize:'14px',
    padding:'0 16px',
    fontFamily:'Roboto,Arial,sans-serif',
  },
}))
export default function Searchbar() {
    const classes=useStyles();
  return (
    <div className={classes.search}>
    <InputBase
      placeholder="Search for products, brands and more" 
      classes={{
          root:classes.inputRoot,
      }}
      inputProps={{ 'aria-label': 'search' }}
    />
    <div className={classes.searchIcon}>
    <SearchIcon/>
    </div>
  </div>
  )
}