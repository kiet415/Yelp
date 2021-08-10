import React from "react"
import BusinessIndex from "../business/business_index";
import KelpMap from "../map/kelp_map";

class Search extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <BusinessIndex 
                    businesses={this.props.businesses}
                    fetchBusinesses={this.props.fetchBusinesses}
                    fetchBusiness={this.props.fetchBusiness}
                    updateFilter={this.props.updateFilter}
                    singleBusiness={true}
                />
                   
                

            </div>
        )
    }
}

export default Search;