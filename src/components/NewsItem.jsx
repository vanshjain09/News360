import image from '../assets/channels4_profile.jpg'
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
      <img className="card-img-top" style={{height:"200px",width:"360px"}}src={src?src:image} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"Click on the Link for More Description"}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem;
