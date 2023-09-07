import PropTypes from 'prop-types' 

const style = {
    width: '80px',
    height: '80px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
}



const SquaredComponent = ({ count, name }) => {
    
    return (
        <div style={{ ...style, backgroundColor: count === 0 ? 'gray' : (count >= 1 && count <= 3) ? 'blue': (count >= 4 && count <= 6) ? 'green': 'red' }}>
            <p style={{fontSize: '10px', textAlign: 'center'}}>{name}</p>
        </div>
    )
}


SquaredComponent.propTypes = {
    count: PropTypes.any,
    name: PropTypes.string
}

export default SquaredComponent