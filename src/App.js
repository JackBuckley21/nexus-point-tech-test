import './App.css';
import Navbar from './components/nav/navbar';
import CarCard from './components/carCard';
import Logo from './assets/dummy.png';
import GridContainer from './components/gridView';

const data = require('./data/mock-vehicle-search-response.json');

const cars = [];
  

for(let i = 0; i < data.data.length; i++) {
  const car = data.data[i]
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
            condition={car.advert_classification}
              title={car.plate + " " + car.make + " " + car.model}
              image={Logo}
              content={car.derivative}
              price={'£' + car.price}
              mileage={car.odometer_value + " " + car.odometer_units}
              body={car.body_type}
              transmission={car.transmission}
            />
          ))}
        </GridContainer>
      </div>
    );
  }

export default App;
