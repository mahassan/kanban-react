import './card.css'
const Card = (props) => {
    return (
        <div className='card'>
            <p>{props.details}</p>
        </div>
    );
}
 
export default Card;