const cardStyle={
    backgroundColor:'yellow',
    width:'350px',
    border:'3px solid black',
    padding:'25px',
    margin:'20px'
}
const heading={
    color:'green'
}
function AwesomeCard(){
    return(
        <div style={cardStyle}>
            <h1 style={heading}>AwesomeCard</h1>
            <button>Click Me😍</button>
        </div>
    )
}
export default AwesomeCard