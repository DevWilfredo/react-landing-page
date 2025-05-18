export const CardComponent = ({ card }) => {
  
  return (
    
    <div className="col-md-3 col-sm-6">

      <div class="card">
        <img src="https://laclosette.com/wp-content/uploads/2017/10/500x300.png" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{card.title}</h5>
            <p class="card-text" style={{ minHeight: "200px" }}>{card.text}</p>
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
      </div>
    </div>
  )
}
