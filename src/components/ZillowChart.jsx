import { useEffect, useState } from "react";
import SquaredComponent from "./SquaredCompoent"
import PropTypes from 'prop-types' 



const ZillowChart = ({ commits }) => {

    //const [dates, setDates] = useState([])
    const [counts, setCounts] = useState([])

    useEffect(() => {
        setCounts(Object.entries(commits))
    }, [])
    


    //console.log(counts.filter(i => console.log(i[0] ,  'counts')));

    
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridGap: '5px', width: '550px'}}>
            {
                counts.map((commit) => ( <SquaredComponent key={commit[0]} name={commit[0]} count={commit[1].length} />))
            }
        </div>
    )
}


ZillowChart.propTypes = {
    commits: PropTypes.object
}


export default ZillowChart