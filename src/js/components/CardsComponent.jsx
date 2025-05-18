const CardsComponent = ({ card }) => {

  return (

    <div className="col-md-3 col-sm-6">

      <div className="card">
        <img src="https://laclosette.com/wp-content/uploads/2017/10/500x300.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text" style={{ minHeight: "200px" }}>{card.text}</p>
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  )
}

export default CardsComponent;