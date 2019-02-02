import React, {Component} from 'react';
import { Media, Player, controls } from 'react-media-player'
const { PlayPause} = controls



export default class TabBream3 extends Component {
    render() {
        return (
            <Media>
                <div className="media">
                    <div className="media-player" style={{display:'none'}}>
                        <Player src="https://www.youtube.com/watch?v=HU-lWrIjsD0&feature=youtu.be" />
                    </div>
                    <div>
                        <PlayPause className="media-controls" style={{position: 'absolute', left: '487px',top: '30px'}} />
                    </div>
                </div>
            </Media>
        )
    }
}