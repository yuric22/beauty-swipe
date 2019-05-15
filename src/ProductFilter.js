import React, {Component} from 'react';
import {RadioGroup, ReversedRadioButton} from 'react-radio-buttons';
import {connect} from 'react-redux';

import {setProductFilter, ProductFilters} from './actions';

import './ProductFilter.css';

class ProductFilter extends Component {
    render(){
        return(
            <div className="product-filter">
                <RadioGroup onChange={ this.props.setProductFilter } value="">
                    <ReversedRadioButton value={ProductFilters.ALL} rootColor="#a6a6a6" pointColor="#8D7CEF">
                        All
                    </ReversedRadioButton>
                    <ReversedRadioButton value={ProductFilters.EYESHADOW} rootColor="#a6a6a6" pointColor="#8D7CEF">
                        Eyeshadow
                    </ReversedRadioButton>
                    <ReversedRadioButton value={ProductFilters.CONCEALER} rootColor="#a6a6a6" pointColor="#8D7CEF">
                        Concealer
                    </ReversedRadioButton>
                    <ReversedRadioButton value={ProductFilters.FOUNDATION} rootColor="#a6a6a6" pointColor="#8D7CEF">
                        Foundation
                    </ReversedRadioButton>
                    <ReversedRadioButton value={ProductFilters.LIPSTICK} rootColor="#a6a6a6" pointColor="#8D7CEF">
                        Lipstick
                    </ReversedRadioButton>
                    <ReversedRadioButton value={ProductFilters.BLUSH} rootColor="#a6a6a6" pointColor="#8D7CEF">
                        Blush
                    </ReversedRadioButton>
                </RadioGroup>
            </div>
        );
    }
}

const mapStateProps = ({ productFilter }) => ({
        productFilter: productFilter,
      });

export default connect(mapStateProps, { setProductFilter })(ProductFilter);