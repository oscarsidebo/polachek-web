import { useState, useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const [location, setLocation] = useState('US');

  async function getCountry() {
    const response = await fetch('https://ipapi.co/json/').then(res => res.json()).catch(err => console.log(err));

    if (response && response.continent_code) {
      return response.continent_code === ('NA' || 'SA') ? 'US' : 'ROW';
    }

    return 'US';

  }

  const links = [
    { href: location === 'US' ? 'http://shop.carolinepolachek.com/' : 'https://shop-uk.carolinepolachek.com/', label: 'Merch' },
    { href: 'https://www.youtube.com/channel/UC_YiGpMGuBb1PbjqPQMf9MQ', label: 'Video' },
    { href: 'https://orcd.co/PANG', label: 'Music' },
  ]

  useEffect(() => {
    // make sure it's client side and only run once
    if (window !== undefined) {
      getCountry().then(res => setLocation(res));
    }
  }, []);

  return (

    <div className="relative">

      <Head>
        <meta charset="utf-8"></meta>
        <title>Caroline Polachek Tour</title>
        <meta content="Caroline Polachek Tour" property="og:title"></meta>
        <meta content="Caroline Polachek Tour" property="twitter:title"></meta>
        <meta content="width=device-width, initial-scale=1" name="viewport"></meta>
        <link href="/favicon.jpeg" rel="shortcut icon" type="image/x-icon"></link>
      </Head>


      {/* Top */}
      <Image src="/images/logo.png" alt="logo" width="100" height="44" layout="responsive" />

      <div className="mb-40"></div>

      {/* Links */}
      <div className="relative flex justify-center items-center  md:py-80 w-screen" >
        {links.map(({ href, label }, i) => (
          <a key={i} href={href} className="text-3xl md:text-6xl  font-serif uppercase mx-16 md:mx-16 lg:mx-40 hover:underline" target="_blank" rel="noreferrer" style={{
            mixBlendMode: 'exclusion'
          }}>
            <h2>
              {label}
            </h2>
          </a>
        ))}
      </div>

      {/* Tour Dates */}
      <div className="mt-80 container mx-auto px-40">
        <div className="font-serif text-secondary" id="seated-55fdf2c0" data-artist-id="bbf67218-01fc-48bb-8aa5-ab9098585c6b" data-css-version="2"></div>
        <Script
          src="https://widget.seated.com/app.js"
        />
      </div>

      {/* Background Image */}
      <div className="w-screen">
        <Image src="/images/caroline.png" alt="hero shot" width="100" height="82" layout="responsive" />
      </div>

    </div>
  )
}
