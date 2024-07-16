import React from 'react';
import Card from './Card';

const CardList = ({ cards, onEdit, onRemove }) => (
    <div className="card-container">
        {cards.map((card, index) => (
            <Card
                key={index}
                card={card}
                index={index}
                onEdit={onEdit}
                onRemove={onRemove}
            />
        ))}
    </div>
);

export default CardList;