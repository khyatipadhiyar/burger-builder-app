import {useState} from 'react'

const AddIngredient = ({onAdd,items}) => {
  const [name, setName] = useState('')
  let [qty, setqty] = useState(0)
  
  const onSubmit =(e)=>{
    e.preventDefault()
    if(!name){
      alert('please add a item')
      return
    } else if(items.filter(item=>item.name.toLowerCase()===name.toLowerCase() && item.qty>0).length===1){
        alert(name + ' is aready in your ingreadient list')
        return
    }
   
    const r = Math.floor(Math.random() * 255).toString()
    const g = Math.floor(Math.random() * 255).toString()
    const b = Math.floor(Math.random() * 255).toString()

    const color =(r+','+g+','+b);
    if(qty===0){
      alert('quantity should not be equal to 0')
      return
    } else if(isNaN(qty)){
      alert('quantity should be integer')
      return
    }
    qty=parseInt(qty)

    onAdd({name,qty,color})
    setName('')
    setqty(0)
  }
  return (
    <div>
    <form className='add-form' onSubmit={onSubmit}>
      <h4>Add Ingredient</h4>
      <div className='form-control'>
        <label>Ingredient</label>
          <input
            type='text'
            placeholder='Enter Your Ingredient'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
      </div>
      <div className='form-control'>
        <label>Quantities</label>
          <input
            type='text'
            placeholder='Enter Your quantities'
            value={qty}
            onChange={(e)=>setqty(e.target.value)}
          />
      </div>
      <input type='submit' value='Save' className='btn btn-block' />
    </form>
    </div>
  )
}

export default AddIngredient
