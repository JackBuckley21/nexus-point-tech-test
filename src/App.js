import './App.css';
import Navbar from './components/nav/navbar';
import CarCard from './components/carCard';
import Logo from './assets/dummy.png';
import GridContainer from './components/gridView';

const data = require('./data/mock-vehicle-search-response.json');

const cars = [];
  

for(let i = 0; i < data.data.length; i++) {
    const car = data.data[i]
    console.log(car)
      cars.push(car);
  
  }

  // console.log(cars)



  function App() {
    return (
      <div>
        <Navbar />
        <GridContainer>
          {cars.map((car) => (
            <CarCard
              title={car.plate + " " + car.make + " " + car.model}
              image={Logo}
              content={car.derivative}
              price={'£' + car.price}
            />
          ))}
        </GridContainer>
      </div>
    );
  }

export default App;
