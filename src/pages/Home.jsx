import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../request'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='3' title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row rowID='4' title='Trending' fetchURL={requests.requestTrending} />
      <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
      <Row rowID='6' title='Popular Series' fetchURL={requests.requestTvSeries} />
      <Row rowID='7' title='Comedy' fetchURL={requests.requestComedy} />
      <Row rowID='8' title='Thriller' fetchURL={requests.requestThriller} />
    </>
  )
}

export default Home