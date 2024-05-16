import {Dimensions} from 'react-native';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGRmOGU2MmU4MGZiZTM4ZWU4OTFiZTcwZmU0YjIwZiIsInN1YiI6IjY1OTRlMWM2MGU2NGFmN2I0ODhjMThmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KmUo2z90m2LVol_15yruAkRUjtfiPFo-MrCKjVlyi5U';
const URL_API = 'https://api.themoviedb.org/3/';
const API_KEY = '2ddf8e62e80fbe38ee891be70fe4b20f';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

enum APIs {
  LOGIN = '/login',
  LOGOUT = '/logout',
  NOW_PLAYING = '/movie/now_playing',
}

export {API_KEY, APIs, SCREEN_HEIGHT, SCREEN_WIDTH, URL_API, token};
