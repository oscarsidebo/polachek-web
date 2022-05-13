import Script from 'next/script';
import Image from 'next/image';

export default function Home() {

  const links = [
    { href: 'http://shop.carolinepolachek.com/', label: 'Merch' },
    { href: 'https://www.youtube.com/channel/UC_YiGpMGuBb1PbjqPQMf9MQ', label: 'Video' },
    { href: 'https://orcd.co/PANG', label: 'Music' },
  ]

  return (
    <div className="relative">
      {/* Top */}
      <Image src="/images/logo.png" alt="logo" width="100" height="44" layout="responsive" />

      {/* Tour Dates */}
      <div className="my-80 container mx-auto px-40">
        {/* 
        <style>.seated-follow-box{display:none}</style>
              */}
        <div className="font-serif text-secondary" id="seated-55fdf2c0" data-artist-id="bbf67218-01fc-48bb-8aa5-ab9098585c6b" data-css-version="2"></div>
        <Script
          src="https://widget.seated.com/app.js"
        />
      </div>

      {/* Background Image */}
      <div className="w-screen">
        <Image src="/images/caroline.png" alt="hero shot" width="100" height="59" layout="responsive" />
      </div>



      {/* Bottom */}
      <div className="absolute flex justify-center items-center py-80 w-screen" style={{
        bottom: 0,
        left: 0
      }}>
        {links.map(({ href, label }, i) => (
          <a key={i} href={href} className="text-6xl font-serif uppercase mx-40 hover:underline" target="_blank">
            <h2>
              {label}
            </h2>
          </a>
        ))}
      </div>
    </div>
  )
}
