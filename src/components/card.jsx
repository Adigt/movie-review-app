import avengers from '../assets/avengers.jpg';
import inception from '../assets/inception.jpg';
import darkKnight from '../assets/dark-knight.jpg';
import interstellar from '../assets/interstellar.jpg';
import titanic from '../assets/titanic.jpg';
import matrix from '../assets/matrix.jpg';
import forrestGump from '../assets/forrest-gump.jpg';
import gladiator from '../assets/gladiator.jpg';
import jurassicPark from '../assets/jurassic-park.jpg';
import lionKing from '../assets/lion-king.jpg';


const movie = [
    { name: "Avengers", description: "A superhero movie." },
    { name: "Inception", description: "A mind-bending thriller." },
    { name: "The Dark Knight", description: "A gritty superhero tale." },
    { name: "Interstellar", description: "A journey through space and time." },
    { name: "Titanic", description: "A tragic love story." },
    { name: "The Matrix", description: "A sci-fi action classic." },
    { name: "Forrest Gump", description: "A heartwarming tale of life." },
    { name: "Gladiator", description: "An epic historical drama." },
    { name: "Jurassic Park", description: "Dinosaurs brought back to life." },
    { name: "The Lion King", description: "A beloved animated classic." }
];
const images = [
    avengers,
    inception,
    darkKnight,
    interstellar,
    titanic,
    matrix,
    forrestGump,
    gladiator,
    jurassicPark,
    lionKing
];

function Card(){
    return (
        movie.map((item, index) => (
            <div className="card" key={index}>
                <img src={images[index]} alt={`${item.name} poster`} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <button>Post Review</button>
            </div>
        ))
    );
}
export default Card;