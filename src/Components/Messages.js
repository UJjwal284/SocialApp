import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {db} from "../Firebase";

class SponsorCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
    }

    componentDidMount() {
        db.ref('/users/' + this.props.currentUserId + '/Chats/' + this.props.id).on('value', (snapshot) => {
                let timeStamps = snapshot.val();
                let newState = [];
                for (let time in timeStamps) {
                    newState.push({
                        by: timeStamps[time].By,
                        message: timeStamps[time].Message
                    })
                }
                this.setState({
                    messages: newState,
                })
            }
        )
    }

    render() {
        return (
            <div>
                {this.state.messages.map(mess =>
                    <p>{mess.message}</p>
                )}
            </div>
        );
    }
}

export default SponsorCard;