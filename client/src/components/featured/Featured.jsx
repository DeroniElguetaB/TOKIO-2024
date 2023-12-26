import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {

    const {data ,loading,error,reFetch} = useFetch ("/hotels/countByCity?cities=tokyo,paris,berlin,punta%20cana")

    return (
        <div className='featured'>
            { loading ? (
                "Loading please wait"
                ) : (    
                <>
                    <div className="featuredItem">
                        <img src="https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt='paris'
                        className='featuredImg'
                        />
                        <div className='featuredTitles'>
                            <h1>Paris</h1>
                            <h1>{data[1]} properties</h1>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <img 
                            src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="tokio" 
                            className='featuredImg'
                            />
                        <div className='featuredTitles'>
                            <h1>tokio</h1>
                            <h1>{data[0]} properties</h1>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <img 
                            src="https://images.unsplash.com/photo-1590665783309-1259e4c1ec9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="punta cana3"
                            className='featuredImg' 
                        />
                        <div className='featuredTitles'>
                            <h1>Punta Cana</h1>
                            <h1>{data[2]} properties</h1>
                        </div>
                    </div>
                </>
                )
            }
        </div>
    )
}

export default Featured