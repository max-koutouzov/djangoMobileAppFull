import React, {Component} from "react";


class SurfShopDetail extends Component {
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
            </div>
        )
    }
}

export default SurfShopDetail;