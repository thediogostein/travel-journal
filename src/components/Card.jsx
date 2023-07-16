import '../css/main.css'
import LocationIcon from '../img/location-icon.svg'

export default function Card(props){
  
  
  return (
    <>
      <article className='card'>
        <img className='card--img' src={props.imageUrl} alt="" />
        
        <section className='card--content'>
          <div className='card--location'>
            <div className='card--location_location'>
              <img src={LocationIcon} alt="" className='card--location_icon'/>
              <p className='card--country'>{props.location}</p>
            </div>
            
            <a href={props.googleMapsUrl} target='_blank' rel='noreferrer'>View on Google Maps</a>
          </div>
          <h1>{props.title}</h1>
          <p className='card--date'><span>{props.startDate}</span>-<span>{props.endDate}</span></p>
          <p>{props.description}</p>
        </section>
      </article>
    </>
  )
}