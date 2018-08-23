import React from 'react';

export const IngredientCard = (props) => (
    <div className="col-tiny-12 col-6 col-md-4">
        <div className="card" onClick={() => props.selectIngredient(props.id, props.name)}>
            <img className="card-img-top" src={props.image} alt={props.name}/>
        </div>
    </div>
)