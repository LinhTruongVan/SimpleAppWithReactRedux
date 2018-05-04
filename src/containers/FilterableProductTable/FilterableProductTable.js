import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../../components/SearchBar/SearchBar';
import ProductTable from '../../components/ProductTable/ProductTable';

import { setFilterText } from '../../actions/filterText';
import { setInStockOnly } from '../../actions/inStockOnly';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({ filterText: filterText })
    }

    handleInStockChange(inStockOnly) {
        this.setState({ inStockOnly: inStockOnly })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.props.filterText}
                    inStockOnly={this.props.inStockOnly}
                    onFilterTextChange={this.props.onFilterTextChange}
                    onInStockChange={this.props.onInStockChange} />
                <ProductTable
                    products={this.props.products}
                    filterText={this.props.filterText}
                    inStockOnly={this.props.inStockOnly} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        filterText: state.filterText,
        inStockOnly: state.inStockOnly
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilterTextChange: (text) => {
            dispatch(setFilterText(text))
        },
        onInStockChange: (inStockOnly) => {
            dispatch(setInStockOnly(inStockOnly))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterableProductTable);