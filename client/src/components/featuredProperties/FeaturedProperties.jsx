import './featuredProperties.css'
import useFetch from '../../hooks/useFetch'

const FeaturedProperties = () => {

    const {data ,loading,error,reFetch} = useFetch ("/hotels?featured=true&limit=4")

    return (
        <div className='fp'>
            {loading ? (
                "loading"
            ) : (
                <>
                    {data.map((item) => (
                        <div className='fpItem' key={item._id}>
                        <img 
                            src={item.photos[0]}
                            // src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="PCApartment" 
                            className='fpImg'
                        />
                        <span className="fpName">{item.name}</span>
                        <span className="fpCity">{item.city}</span>
                        <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                        {item.rating && <div className="fpRating">
                            <button>{item.rating}</button>
                            <span>Excellent</span>
                        </div>}
                    </div>
                    ))}
                </>
            )}
        </div>
        )
}

export default FeaturedProperties