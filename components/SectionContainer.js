/* eslint-disable react/no-unknown-property */
import Script from 'next/script'
export default function SectionContainer({ children }) {
  return (
    <div className=" bg-black w-full mt-2  min-h-screen">
      {/* <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6978760910049416"
          crossorigin="anonymous"
        ></script>
      </Head> */}
      <Script
        strategy="lazyOnload"
        async="true"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6978760910049416"
      />
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
    </div>
  )
}
