import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import Modal from './components/Modal';
import './index.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
    setCards(savedCards);
  }, []);

  const saveCard = (card) => {
    let updatedCards = [...cards];
    if (currentCard !== null) {
      updatedCards[currentCard] = card;
    } else {
      updatedCards.push(card);
    }
    setCards(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
    setShowModal(false);
  };

  const removeCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
  };

  const editCard = (index) => {
    setCurrentCard(index);
    setShowModal(true);
  };

  const handleNewVideo = () => {
    setCurrentCard(null);
    setShowModal(true);
  };

  return (
    <div className="App">
      <Header onNewVideo={handleNewVideo} />
      <main>
        <section id="featured">
          <h2>FRONT END</h2>
          <div className="featured-card">
            <img src="https://via.placeholder.com/150" alt="Destacado" />
            <div className="content">
              <h3>Challenge React</h3>
              <p>¿Qué significa pensar como programador?</p>
            </div>
          </div>
        </section>
        <section id="frontend">
          <h2>FRONT END</h2>
          <CardList
            cards={cards.filter(card => card.category === 'frontend')}
            onEdit={editCard}
            onRemove={removeCard}
          />
        </section>
        <section id="backend">
          <h2>BACK END</h2>
          <CardList
            cards={cards.filter(card => card.category === 'backend')}
            onEdit={editCard}
            onRemove={removeCard}
          />
        </section>
        <section id="innovation">
          <h2>INNOVACIÓN Y GESTIÓN</h2>
          <CardList
            cards={cards.filter(card => card.category === 'innovation')}
            onEdit={editCard}
            onRemove={removeCard}
          />
        </section>
      </main>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={saveCard}
        card={currentCard !== null ? cards[currentCard] : null}
      />
    </div>
  );
};

export default App;