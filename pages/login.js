import Head from "../components/Head"
import LoginForm from "../components/LoginForm"
import Router from 'next/router'
import React from "react"

export default function LoginPage() {
  React.useEffect(() => {
    if (localStorage.getItem('USER')) Router.push('/conta')
  }, [])
  return (
    <>
      <Head title='Energize-It - Login' icon='/favicon.svg' />
      <LoginForm />
    </>
  )
}