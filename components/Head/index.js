import NextHead from 'next/head';

export default function Head({ title, icon }) {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <link rel="icon" href={icon}/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
    </NextHead>
  )
}