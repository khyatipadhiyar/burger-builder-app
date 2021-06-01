import BunTop from './Img/bunTop.png';
import BunBottom from './Img/bunBottom.png';


const BurgerDisplay = ({items}) => {

  const emptyArry =[];
  items.forEach(element => {
    for (let i = 0; i <element.qty; i++) {
      emptyArry.push(element.color)
    }
  });

  return (
    <div className='burger'>
      <img src={BunTop} alt='topbun' className='img'/>
      
      {emptyArry.map((item)=><div key={item.id} style={{ background: `rgb(${item})`,width:'200px',height:'10px', margin:'2px',borderRadius:'20px',textAlign:'center' }}>  </div>)}
          
      <img src={BunBottom} alt='topbun' className='img'/>
      
    </div>
  )
  
}

export default BurgerDisplay
