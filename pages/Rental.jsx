import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Info from '../components/Info';

const Rental = () => {
    const [rentalId, setRentalId] = useState();
    let { id } = useParams();
    const navigate = useNavigate();

  useEffect(() => {
    fetch("../datas-kasa.json")
    .then((res) => {
      console.log(res)
      return res.json();
    })
    .then((data) => {
        const rental = data.find(item => item.id === id);
        setRentalId(rental);

        if (!rental) {
          navigate('/error');
        }
      })
      .catch((error) => {
        console.log(error)
        console.log("data pas trouvées")
      })
  },  // https://www.w3schools.com/react/react_useeffect.asp
  // je veux que ça charge chaque fois que l'id sollicité change
  //Runs on the first render
  //And any time any dependency value changes
  [id, navigate]);
    return (
        <div className='main'>
          {rentalId && (
            <section className="rental">
              <Gallery pictures={rentalId.pictures} />
              <Info {...rentalId} />
            </section>)}
        </div>
    );
};

export default Rental;