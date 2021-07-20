import React, {Component} from "react";
import axios from "axios";
import Surfshopupdate from "./surfshopupdate";

class SurfShopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.updateSurfShopDetails = this.updateSurfShopDetails.bind(this);
        this.deleteSurfShop = this.deleteSurfShop.bind(this);
    }

    updateSurfShopDetails() {
        this.setState({ showComponent: true })
    }
    deleteSurfShop(obj) {
        console.log(obj);
        axios.delete("http://127.0.0.1:8000".concat(obj))
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const obj = this.props.surfShopDetail;
        return (
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4>
                    {obj.surf_shop_name}
                </h4>
                <h5>
                    Address: {obj.street} {obj.city} {obj.zip_code}
                </h5>
                <h6>
                    Phone: {obj.phone_number}
                </h6>
                <p>
                    {obj.description}
                </p>
                <button
                    style={{ backgroundColor: "white" }}
                    onClick={ ()=> this.updateSurfShopDetails() }
                >
                    Update
                </button>

                <button
                    style={{ backgroundColor: "white" }}
                    onClick={() => this.deleteSurfShop(obj.delete)}>
                    Delete
                </button>
                {this.state.showComponent ? <Surfshopupdate surfShopUpdate={obj} /> : null}
            </div>
        );
    }
}

export default SurfShopDetail;