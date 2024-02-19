const element = (
  // Write your code here.
  <div className='bg_container'>
    <h1 className='heading'> Congratulations</h1>
    <div className='container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='logo'
      />
      <h1 className='head'>Kiran V</h1>
      <p className='para'></p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='logo'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
