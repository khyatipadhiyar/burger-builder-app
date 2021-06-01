import PropTypes from 'prop-types'
import IngredientItem from './IngredientItem'


const IngredientList = ({title,items,onClickPlusqty,onClickMinusqty}) => {
  return (
    <div>
      <h4>{title}</h4>

      {items.map((item)=>(<IngredientItem key={item.id} item={item} onClickPlusqty={onClickPlusqty} onClickMinusqty={onClickMinusqty}>{item.item} </IngredientItem>))} 
    </div>
  )
  
}
IngredientList.defaultProps ={
  title: 'Burger Items',
}

IngredientList.propTypes = {
  title: PropTypes.string.isRequired,
}
export default IngredientList
