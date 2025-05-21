import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurants } from '../Home'
import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/Header/Perfil'
import ProductList from '../../components/ProductList'

const Perfil = () => {
  const { id } = useParams()
  const [rest, setRest] = useState<Restaurants>()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRest(res))
  }, [id])

  if (!rest) {
    return <h3>Esta Carregando...</h3>
  }
  return (
    <>
      <HeaderPerfil />
      <Banner />
      <div className="container">
        <ProductList restaurants={[rest]} />
      </div>
    </>
  )
}
export default Perfil
