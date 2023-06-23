import React, { useEffect, useState } from 'react'
import { getPokeDataByName } from '../Apis/Api'
import PokeView from '../Components/PokeView';
import { MsgError } from '../Components/MsgError';
import { Info } from '../Components/Info';
import { FaInfo, FaSearch } from 'react-icons/fa';
import Loader from '../Components/Loader';

const Index = () => {
  const [searchPoke, setSearchPoke] = useState('');
  const [pokeData, setpokeData] = useState(null);
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [viewInfo, setviewInfo] = useState(true);
  
  const handleSubmit = (event) => {
    setviewInfo(false)
    setpokeData(null);
    setMsg('')
    event.preventDefault();
    if (searchPoke != '') {
      setIsLoading(true)
      getPokeDataByName(searchPoke).then((data) => {
        setIsLoading(false)
        setpokeData(data);
        setMsg('')
      }).catch((error) => {
        setIsLoading(false)
        setpokeData(null);
        setMsg("Hubo un Error al hacer la búsqueda")
      });
    } else {
      setpokeData(null);
      setMsg("Debes Ingresar un pokemon o numero de pokedex")
    }
  }
  const setBusqueda = (event) => {
    setSearchPoke(event.target.value);
  }

  const btnInfo = () => {
    setpokeData(null);
    setMsg('')
    setviewInfo(true)
  }
  return (
    <React.Fragment>
      <div className="container col-12 col-md-8 col-lg-6 col-xl-5">
        <form className="d-flex pt-4 mb-4" onSubmit={handleSubmit}>
          <button onClick={btnInfo} className="btn btn-warning" type='button'><FaInfo /></button>
          <input onChange={setBusqueda} value={searchPoke} className="form-control me-1 ms-1" type="search" placeholder="Nombre Pokemon o N° Pokedex" aria-label="Search" />
          <button className="btn btn-success" type="submit"><FaSearch /></button>
        </form>
        <div className='d-flex justify-content-center'>
          {isLoading && <Loader />}
        </div>

        {pokeData && <PokeView data={pokeData} />}
        {msg && <MsgError msg={msg} />}
        {!pokeData && !msg && viewInfo && <Info />}
      </div>
    </React.Fragment>
  )
}
export default Index