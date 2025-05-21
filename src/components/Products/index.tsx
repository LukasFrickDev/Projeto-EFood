import Button from '../Button'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
  id: number
}

const Products = ({ image, title, description }: Props) => {
  const getDescriptionSlice = (description: string) => {
    if (description.length > 105) {
      return description.slice(0, 103) + '...'
    }
    return description
  }

  return (
    <S.Card>
      <S.Container>
        <img src={image} alt={title} />
        <S.Title>{title}</S.Title>
        <S.Description>{getDescriptionSlice(description)}</S.Description>
        <Button
          type="button"
          title="Adicionar ao carrinho"
          onClick={() => alert('Produto adicionado!')}
        >
          Adicionar ao carrinho
        </Button>
      </S.Container>
    </S.Card>
  )
}

export default Products
