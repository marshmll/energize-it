import Head from "../components/Head"
import Header from "../components/Header"
import Call from "../components/Call"
import Apresentation from "../components/Apresentation"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Head title='Energize-It - Energia Inteligente' icon="/favicon.svg"/>
      <Header />  
      <Call />  
      <Apresentation />
      <Footer />
    </>
  )
}
