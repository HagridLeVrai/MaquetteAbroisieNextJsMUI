import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

import SearchBar from "material-ui-search-bar";
import { Avatar, Box, IconButton  } from '@mui/material';

// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Router
import Router from 'next/router';


const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {}
        <CssBaseline />

        
        <div id="top bar" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap'}} >
          <SearchBar style={{ width: '88%', margin: 20 }}></SearchBar>
          <IconButton size="large" aria-label="Panier" color="inherit" onClick={() => Router.push('/panier')} >
            <ShoppingCartIcon sx={{ color: "#6E6E6E" }} />
          </IconButton>
          <IconButton size="large" aria-label="Favoris" color="inherit" onClick={() => Router.push('/favoris')} >
            <FavoriteIcon sx={{ color: "#6E6E6E", marginLeft: "10" }} />
          </IconButton>
          <IconButton sx={{ marginLeft: "50" }} onClick={() => Router.push('/connexion')}>
            <Avatar></Avatar>
          </IconButton>
        </div>

        <Component {...pageProps}/>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
