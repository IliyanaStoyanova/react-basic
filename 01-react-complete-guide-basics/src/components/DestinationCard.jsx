const DestinationCard = ({ title, price, location }) => {
    return (
        <div className="destination-card">
            <h3>{title}</h3>
            <p>Location: {location}</p>
            <div className="price-tag">${price}</div>
            <button>View Details</button>
        </div>
    );
};

export default DestinationCard;