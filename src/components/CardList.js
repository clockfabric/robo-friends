import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    render() {
        const cardArray = this.props.robotsProp.map((user) => {
            return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
        });
        return (
            <div>
                {cardArray}
            </div>
        );
    }
}

export default CardList;