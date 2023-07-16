import Header from "./components/Header"
import Card from "./components/Card"
import data from './data/data'

export default function App(){
  console.log(data)

  return(
    <>
      <Header/>
      <section className="cards wrapper">
        <Card/>
        <Card/>
        <Card/>
      </section>

    </>
  )
}