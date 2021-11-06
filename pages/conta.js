import Head from "../components/Head"
import Account from "../components/Account"
import Router from 'next/router'
import React from "react"

export default function MinhaConta() {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    if (!localStorage.getItem('USER')) {
      Router.push('/login');
      return;
    }
    setUser(localStorage.getItem('USER'))
    console.log('> Use effect...');
    console.log(user);
  }, [])
  
  return (
    <>
      <Head title='Energize-It - Minha Conta' icon='/favicon.svg' />
      <Account user={user} />
    </>
  )
}