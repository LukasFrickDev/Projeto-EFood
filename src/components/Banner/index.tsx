import { useEffect, useState } from 'react'
import { Restaurants } from '../../pages/Home'
import * as S from './styles'
import { useParams } from 'react-router-dom'

const Banner = () => {
  const { id } = useParams()
  const [restaurants, setRestaurants] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [id])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.Imagem style={{ backgroundImage: `url(${restaurants.capa})` }}>
      <div className="container">
        <S.TitleOne>{restaurants.tipo}</S.TitleOne>
        <S.TitleTwo>{restaurants.titulo}</S.TitleTwo>
      </div>
    </S.Imagem>
  )
}

export default Banner
