import React, {Component} from "react";


class SurfShopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.updateSurfShopDetails = this.updateSurfShopDetails.bind(this);
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
                {this.state.showComponent ? <surfShopUpdate surfShopUpdate={obj} /> : null}
            </div>
        );
    }
}

export default SurfShopDetail;