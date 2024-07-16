import React, { useState, useEffect } from 'react';

const Modal = ({ show, onClose, onSave, card }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('frontend');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (card) {
            setTitle(card.title);
            setCategory(card.category);
            setImage(card.image);
            setVideo(card.video);
            setDescription(card.description);
        } else {
            setTitle('');
            setCategory('frontend');
            setImage('');
            setVideo('');
            setDescription('');
        }
    }, [card]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, category, image, video, description });
    };

    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>{card ? 'Editar Card' : 'Nuevo Video'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Título</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label>Categoría</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="frontend">Front End</option>
                        <option value="backend">Back End</option>
                        <option value="innovation">Innovación y Gestión</option>
                    </select>
                    <label>Imagen</label>
                    <input
                        type="url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                    <label>Video</label>
                    <input
                        type="url"
                        value={video}
                        onChange={(e) => setVideo(e.target.value)}
                        required
                    />
                    <label>Descripción</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <button type="submit">Guardar</button>
                    <button type="button" onClick={onClose}>Cancelar</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;