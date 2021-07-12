import React, { Component } from 'react';
import SurfShopDetail from "./surfshopdetail";
import axios from 'axios'
import SurfForm from "./surfshopform";


class SurfShopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surfShopData: [],
            surfShop: " ",
            showComponent: false,
        };
        this.getSurfShopDetail = this.getSurfShopDetail.bind(this);
        this.showSurfShopDetail = this.showSurfShopDetail.bind(this);
    }

    getSurfShopDetail(item) {
        axios.get("http://127.0.0.1:8000".concat(item.absolute_url))
            .then((response) => {
                this.setState({surfShop: response.data})
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    showSurfShopDetail(item) {
        this.getSurfShopDetail(item);
        this.setState({ showComponent: true });
    }

    componentDidMount() {
        axios.get("http://localhost:8000/")
            .then((response) => {
                this.setState({surfShopData: response.data})
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return(
            <div>
                <SurfForm/>
                {this.state.surfShopData.map((item) => {
                    return (
                        <h3 key={item.id} onClick={ () => this.showSurfShopDetail(item)}>
                        {item.surf_shop_name}, {item.city}
                    </h3>
                    );
                })}

                {this.state.showComponent ? (
                    <SurfShopDetail surfShopDetail={this.state.surfShop} />
                ) : null}
            </div>
        )
    }
}

export default SurfShopList;