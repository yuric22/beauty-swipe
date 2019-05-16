import React, { Component } from 'react';
import { connect } from 'react-redux';

import counterDislike from './counter-dislike.svg';
import counterLike from './counter-like.svg';

import './InteractionCounter.css';

class InteractionCounter extends Component {
    render() {
        return (
            <div className="interaction-count">
                <div><img className="counter" src={counterDislike} alt="dislike counter" /> {this.props.dislikeCount}</div>
                <div>{this.props.likeCount} <img className="counter" src={counterLike} alt="like counter" /></div>
            </div>
        );
    }
}

const mapStateProps = ({interactionCount: { likes, dislikes }}) => ({
    likeCount: likes,
    dislikeCount: dislikes,
});

export default connect(mapStateProps)(InteractionCounter);