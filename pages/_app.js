import { useState } from 'react';
import Layout from '../Componnent/Layout';
import { AllcontextProvider } from "../context/AllContext";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const [openDate, setopenDate] = useState(false);
  const [openOption, setopenOption] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [destination, setdestination] = useState('');
  const [adult, setadult] = useState(1);
  const [child, setchild] = useState(0);
  const [room, setroom] = useState(1);
  const [loading, setloading] = useState(false);
  const [openBigPhoto, setopenBigPhoto] = useState(false);


  const passObject = {
    openDate,
    setopenDate,
    openOption,
    setopenOption,
    state,
    setState,
    adult,
    setadult,
    child,
    setchild,
    room,
    setroom,
    destination,
    setdestination,
    loading,
    setloading,
    openBigPhoto,
    setopenBigPhoto
  }



  if (Component.getLayout) {
    return (
      <AllcontextProvider value={passObject}>
        {Component.getLayout(<Component {...pageProps} />)}
      </AllcontextProvider>
    )
  }
  return (
    <AllcontextProvider value={passObject}>
      <Layout><Component {...pageProps} /></Layout>
    </AllcontextProvider>
  )
}

export default MyApp;
