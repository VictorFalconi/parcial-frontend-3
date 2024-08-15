import CardStyles from "../Styles/Card.module.css";

const Card = ({customer}) => {
    const {name, lastName} = customer;
    return (
        <div className={CardStyles.container}>
            <h3>Hola, {name}!</h3>
            <h4>Tu apellido es {lastName}.</h4>
        </div>
    );
};

export default Card;
  