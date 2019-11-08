function Person(props){
  return(
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.status}</p>
    </div>
  ); 
}

ReactDOM.render(<Person name='Lauren' status='Presant!'/>, document.querySelector('#p1'));
ReactDOM.render(<Person name='Max' status='Here!'/>, document.querySelector('#p2'));