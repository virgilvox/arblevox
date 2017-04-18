import React from 'react'
import Paper from 'material-ui/Paper'
import QrView from '../components/QrView'

const style = {
  height: 1200,
  width: 600,
  margin: 20,
  textAlign: 'center',
  display: 'flex',
  'align-content': 'center'
}

const Home = () => (
  <Paper style={style}>
    <QrView />
  </Paper>
)

export default Home
