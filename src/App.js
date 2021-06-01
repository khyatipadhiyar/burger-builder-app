import {useState} from 'react'
import Header from './components/Header'
import AddIngredient from './components/AddIngredient'
import IngredientList from './components/IngredientList'
import BurgerDisplay from './components/BurgerDisplay'

function App() {

  const [items,setitems] = useState([
    
  ])
  
//Add task
const AddItems=(item)=>{
 const id =Math.floor(Math.random()*10000)+1
 const newItem = {id, ...item}
 setitems([...items, newItem])
}
// Increase item
const onClickPlusqty=(id)=>{
  setitems(items.map(item=>item.id===id?{...item, qty:item.qty+1}:item))
}
//decrese item
const onClickMinusqty=(id)=>{
  setitems(items.map(item=>item.id===id?{...item, qty:item.qty-1<0?0:item.qty-1}:item))
}

  return (
    <div className="App">
    <div className='container'>
      <Header/>
      <div className='item'>
        <IngredientList items={items} onClickPlusqty={onClickPlusqty} onClickMinusqty={onClickMinusqty}/>
        <AddIngredient onAdd={AddItems} items={items}/>
      </div>
      <BurgerDisplay items={items}/>
    </div>
    </div>
  );
}

export default App;
