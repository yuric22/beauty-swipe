import React from 'react';
// import WeightedList from 'js-weighted-list';
import Spinner from './Spinner';
import { API } from './api.js';

import btnDislike from './btn-dislike.svg';
import btnLike from './btn-like.svg';

import './BeautySwipe.css';

// const weightedBrands = new WeightedList(brands.map(b => [b, brands.length]));

class BeautySwipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
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

    componentDidUpdate() {
        // console.log(weightedBrands.weights);
    }

    getProducts = () => {
        this.setState({
            loading: true,
        });

        API.PRODUCTS.GET(this.state.page).then((response) => {
            // const {brands} = this.state;
            // const filteredBrands = data.hits.filter(hit => !brands.includes(hit.brand)).map(hit  => hit.brand);
            // console.log("iltreede", filteredBrands);
            // const uniqueBrands = [...new Set(filteredBrands)];
            // console.log("unique", uniqueBrands);

            const data = response.data;

            if (data.hits && data.hits.length) {
                this.setState({
                    cards: data.hits,
                    // brands: brands.concat(uniqueBrands),
                    currentCard: data.hits[0],
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
        // weightedBrands.addWeight(this.state.currentCard, 1);
        this.getNextCard();
    }

    handleDislikeClick = () => {
        // weightedBrands.addWeight(this.state.currentCard, -1);
        this.getNextCard();
    }

    getNextCard = () => {
        // const newCard = weightedBrands.peek();
        // console.log("PEEK", newCard)
        // this.setState({
        //     currentCard: newCard,
        // });
    }

    render() {
        return (
            <div className="beauty-swipe-wrapper">
                {this.state.loading ?
                    <Spinner />
                :
                    <div>
                        <div className="card">
                            <img src={this.state.currentCard.imageUrl} alt="Product" className="card-img" />
                            <div className="footer">
                                <h1>{this.state.currentCard.name}</h1>
                                <h2>{this.state.currentCard.brand}</h2>
                            </div>
                        </div>
                        <div className="buttons">
                            <img className="btn-dislike" src={btnDislike} onClick={this.handleDislikeClick} alt="dislike" />
                            <img className="btn-like" src={btnLike} onClick={this.handleLikeClick} alt="like" />
                        </div>
                    </div>
                }
            </div>
        )
    };
}

export default BeautySwipe;
