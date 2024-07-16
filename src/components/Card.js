import React from 'react';

const Card = ({ card, index, onEdit, onRemove }) => (
    <div className="card">
        <img src={card.image} alt={card.title} />
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <button onClick={() => onRemove(index)}>Eliminar</button>
        <button onClick={() => onEdit(index)}>Editar</button>
    </div>
);

export default Card;