function Person(){
    return(
      <div className='person'>
        <h1>Lauren</h1>
        <p>Presant!</p>
      </div>
    ); 
  }
  

  ReactDom.render(<Person/>, document.querySelector('#p1'));