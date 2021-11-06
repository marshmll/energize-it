import Head from "../components/Head"
import Account from "../components/Account"
import Router from 'next/router'

export default function MinhaConta() {
  const user = localStorage.getItem('USER') || "erro"
  if (user === 'erro') Router.push('/login')
  return (
    <>
      <Head title='Energize-It - Minha Conta' icon='/favicon.svg' />
      <Account user={user} />
    </>
  )
}