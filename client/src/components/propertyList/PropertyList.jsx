import useFetch from '../../hooks/useFetch'
import './propertyList.css'

const PropertyList = () => {

    const {data ,loading,error,reFetch} = useFetch ("/hotels/countByType")

    const images = [
        "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1642215072820-6c71de628076?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1590875936713-008daa5b2b60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1576801582643-c4e3d33efd2e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1641957991890-d382bc8e7822?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]

    return (
        <div className='pList'>
            {loading ? (
                "loading"
            ) : (
            <>
                {data && 
                    images.map((img, i)=> (
                        <div className='pListItem' key={i}>
                            <img 
                                src={img}
                                alt="hotelPuntaCana"
                                className='pListImg' 
                            />
                            <div className='pListTitles'>
                                <h1>{data[i]?.type}</h1>
                                <h2>{data[i]?.count} {data[i]?.type}</h2>
                            </div>
                        </div>
                    ))
                }
            </>)}
        </div>
    )
}

export default PropertyList
