function Person(props){
  return(
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.status}</p>
    </div>
  ); 
}
var app = (
  <div>
    <Person name='Lauren' status='Presant!'/>
    <Person name='Max' status='Here!'/>
  </div>
);

ReactDOM.render(app, document.querySelector('#app'));