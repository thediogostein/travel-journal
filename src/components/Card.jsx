import '../css/main.css'

export default function Card(){
  return (
    <>
      <article className='card'>
        <img className='card--img' src="https://source.unsplash.com/WLxQvbMyfas" alt="" />
        
        <section className='card--content'>
          <div className='card--location'>
            <p className='card--country'>JAPAN</p>
            <a href="">View on Google Maps</a>
          </div>
          <h1>Mount Fuji</h1>
          <p className='card--date'><span>12 Jan, 2021</span>-<span>24 Jan, 2021</span></p>
          <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </section>
      </article>
    </>
  )
}