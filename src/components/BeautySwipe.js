import React from 'react';
import {connect} from 'react-redux';
import Spinner from './Spinner';
import InteractionCounter from './InteractionCounter';
import { API } from '../api.js';

import btnDislike from './btn-dislike.svg';
import btnLike from './btn-like.svg';

import { ProductFilters, incrementDislike, incrementLike } from '../actions';

import './BeautySwipe.css';

class BeautySwipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            pastInteractionCards: [],
            currentCard: null,
            loading: true,
            error: false,
            brands: [],
            page: 0,
        }
    }

    componentWillMount() {
        this.getProducts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.productFilter !== this.props.productFilter){
            this.getProducts(nextProps.productFilter);
        }
    }

    getProducts = (filter) => {
        const productFilter = filter || this.props.productFilter;

        this.setState({
            loading: true,
        });

        const params = [this.state.page];

        if (productFilter && productFilter !== ProductFilters.ALL)
            params.push(productFilter);

        API.PRODUCTS.GET(...params).then((response) => {
            const data = response.data;

            if (data.hits && data.hits.length) {
                const newProductsOnly = data.hits.filter(product => !this.state.pastInteractionCards.includes(product.productId));

                this.setState({
                    cards: newProductsOnly,
                    currentCard: newProductsOnly[0],
                    loading: false,
                })
            }
        }).catch(error => {
            this.setState({
                error: true,
                loading: false,
            })
            console.error('Could not load products.')
        });
    }

    handleLikeClick = () => {
        this.props.incrementLike();
        this.setState({
            pastInteractionCards: [].concat(this.state.pastInteractionCards).concat(this.state.currentCard.productId),
        });
        this.getNextCard();
    }

    handleDislikeClick = () => {
        this.props.incrementDislike();
        this.setState({
            pastInteractionCards: [].concat(this.state.pastInteractionCards).concat(this.state.currentCard.productId),
        });
        this.getNextCard();
    }

    getNextCard = () => {
        const updatedCards = [].concat(this.state.cards);
        updatedCards.shift();
        this.setState({
            cards: updatedCards,
            currentCard: this.state.cards[1],
        });

        if (updatedCards.length === 1){
            this.setState({
                page: this.state.page + 1
            }, this.getProducts)
        }
    }

    render() {
        return (
            <div className="beauty-swipe-wrapper">
                <InteractionCounter />
                {this.state.loading ?
                    <Spinner />
                :
                    <div>
                        <div className="card">
                            <div className="body">
                                <img src={this.state.currentCard.imageUrl} alt="Product" className="card-img" />
                            </div>
                            <div className="footer">
                                <h1>{this.state.currentCard.name}</h1>
                                <h2>{this.state.currentCard.brand}</h2>
                            </div>
                        </div>
                        <div className="interaction-buttons">
                            <img className="btn-dislike" src={btnDislike} onClick={this.handleDislikeClick} alt="dislike" />
                            <img className="btn-like" src={btnLike} onClick={this.handleLikeClick} alt="like" />
                        </div>
                    </div>
                }
            </div>
        )
    };
}

const mapStateProps = ({ filter }) => ({
    productFilter: filter.productFilter,
});

export default connect(mapStateProps, { incrementDislike, incrementLike })(BeautySwipe);
