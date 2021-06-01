import { FaPlusSquare} from 'react-icons/fa'
import {FaMinusSquare} from 'react-icons/fa'

const IngredientItem = ({item,onClickPlusqty,onClickMinusqty}) => {
  return (
    <div className='task'>
      
              <p className='space'>{item.name} </p>
              <p className='space'>{item.qty}</p>
              <p className='space'><FaPlusSquare onClick={()=>onClickPlusqty(item.id)} style={{color:'Green',cursor:'pointer'}}/></p>
              <p className='space'><FaMinusSquare onClick={()=>onClickMinusqty(item.id )}style={{color:'Green',cursor:'pointer'}} /></p>

    </div>
  )
}

export default IngredientItem
