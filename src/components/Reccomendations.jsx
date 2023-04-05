// Reccomendations page should request data from the database, then render all data as cards
import React, { Component } from 'react';
import ReccCard from './ReccCard';

class Reccomendations extends Component {
    constructor(props) {
        super(props);
        // state should hold all user's reccs from db
        this.state = {
            fetchedReccs: false,
            reccs: []
        }
    }
    // when component mounts, make a fetch request
    componentDidMount() {
        fetch('/recc/')
            .then(res => res.json())
            .then((reccs) => {
                if (!Array.isArray(reccs)) reccs = [];
                console.log(`Got reccs: ${reccs}`);
                return this.setState({
                    reccs,
                    fetchedReccs: true
                })
            })
    }

    render() {

        if (this.state.fetchedReccs && this.state.reccs !== []) {
            const { reccs } = this.state;
            const reccElements = reccs.map((recc, i) => {
                return (
                    <ReccCard
                    key={i}
                    info={recc}
                    />
                )
            })
            return (
    
                <div>{reccElements}</div>
            )
        } else return (
            <div>No reccomendations found</div>
        )
    }
}



export default Reccomendations;