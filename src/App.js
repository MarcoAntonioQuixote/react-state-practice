import { useState } from 'react';
import './App.css';
import Breakfast from './components/Breakfast.js';
import Dinner from './components/Dinner.js';
import Welcome from './components/Welcome.js';
import SelectStudent from './components/SelectStudent.js';
import ItemCard from './components/ItemCard.js';
import Menu from './components/Menu.js';

function App() {

    
    let [isBreakfast, setIsBreakfast] = useState(true);
    let [student, setStudent] = useState('Mark Anthony');
    let [order,setOrder] = useState([]);

    

    const handleChange = () => {
        setIsBreakfast(prev => !prev)
    }


    const showOrderItems = order.map((item) => <ItemCard item={item} />)

  return (
    
    <div className="App-header">
        My restaurant

        <Menu setOrder={setOrder}/>

        <p>You ordered: </p>
        {showOrderItems}

        {/* <Welcome student={student} />
        <SelectStudent setStudent={setStudent} /> */}



        {/* {isBreakfast ? <Breakfast /> : <Dinner />}
        <button onClick={handleChange} >Change Meal</button> */}
    </div>
  );
}

export default App;
