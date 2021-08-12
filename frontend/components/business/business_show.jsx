import React from 'react';
import BusinessHeader from "./business_header"
import ReviewItem from '../review/review_item'
import BusinessTimes from './business_times'
import { Link } from 'react-router-dom';
import ReviewForm from '../review/review_form';
import {withRouter} from "react-router-dom"
class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchBusiness();
    }
    getRatingsPicture = (rating) => {
        if(rating === 0) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_0.png";
        } else if (rating === 1) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_1.png"
        } else if (rating === 1.5) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_1_half.png"
        } else if (rating === 2) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_2.png"
        } else if (rating === 2.5) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_2_half.png"
        } else if (rating === 3) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_3.png"
        } else if (rating === 3.5) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_3_half.png"
        } else if (rating === 4) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_4.png"
        } else if (rating === 4.5) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_4_half.png"
        } else if (rating === 5) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_5.png"
        }
    }
    
    render() {
        console.log(this.props)
        if(this.props.business === undefined) return null;
        let rating = this.getRatingsPicture(this.props.business.rating)
        let photo = {
            backgroundImage: 'url(' + this.props.business.pictures + ')',
        }
        
        return (
            
            <div className="">
                <BusinessHeader/>
                <div className="business-info" style={photo}>
                    <div className="business-desc">
                        <h2 className="business-name">{this.props.business.name}</h2>
                        <div>
                            <img className="rating" src={rating}></img>
                            {this.props.business.numRating} reviews
                        </div>
                        {this.props.business.price}&nbsp;-&nbsp; 
                        {this.props.business.categories}
                        

                    </div>
                    <div className="allPhotos">
                        <button><Link to={`/business/${this.props.business.id}/all-photos`}
                            >See All Photos</Link> </button>    
                    </div> 
                </div>
                <div className="business-body">

                   <div className="business-bodyLeft">
                       
                        <button className="review-link">
        
                            <Link to={`/business/${this.props.business.id}/new-review`}
                            >Write a Review</Link> 
                        </button>
                        <button className="review-link">
                        <Link to={`/business/${this.props.business.id}/new-photo`}
                            >Add Photo</Link> 
                            
                        </button>
                        <BusinessTimes 
                            hours={this.props.business.openHours}
                        />

                        <h1 className="review-title">Recommended Reviews</h1>
                            {this.props.reviews.map(review => (
                                <ReviewItem
                                    body={review.body}
                                    img={this.getRatingsPicture(review.rating)}
                                    date={review.date}
                                    key={review.id}
                                    firstName={review.firstName}
                                    lastName={review.lastName}
                                />
                                
                            ))}
                     
                   </div>
                    
                    <div className="business-bodyRight">
                        <span className="business-side-info">
                            <div className="business-website"><a href={this.props.business.website}>{this.props.business.name}</a> <span><img src="https://static.thenounproject.com/png/640392-200.png"/></span></div>
                            <div className="business-number"><span>{this.props.business.phoneNumber}</span><span><img src="https://cdn.iconscout.com/icon/free/png-256/phone-2666572-2212584.png"/></span></div>
                            <div className="business-location">
                                <div className="">
                                    <div className="business-st">{this.props.business.location} </div>
                                    <div>{this.props.business.city}, {this.props.business.zipCode}</div>
                                </div>
                                
                                <span><img src="https://cdn.iconscout.com/icon/free/png-256/directions-1782209-1512759.png"/></span>
                                
                                
                            </div>
                        </span>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default BusinessShow;


