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

    async componentDidMount() {
        try {
            db.ref('/users/' + sessionStorage.getItem('currentUserId') + '/Chats/' + this.props.id).on('value', (snapshot) => {
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
        } catch (error) {
        }
    }

    render() {
        return (
            <div id={'box'}>
                {this.state.messages.map(mess =>
                    <p className={mess.by === sessionStorage.getItem('currentUserId') ? 'c1' : 'c2'}>{mess.message}</p>
                )}
            </div>
        );
    }
}

export default SponsorCard;