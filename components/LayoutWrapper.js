import React from 'react'
import useScrollDirection from '../hooks/useScrollDirection'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'

import { FramerNav } from './framerNav'

const LayoutWrapper = ({ children }) => {
  const scrollDirection = useScrollDirection('down')
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between min-h-screen ">
        <header className="flex items-center justify-between py-[.9rem] sm:py-10">
          <div>
            <Link href="/" aria-label="Deepanshu Blog">
              <div className="flex items-center justify-between">
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  <div className="flex items-center justify-between">
                    <div className="mr-3 ">
                      <img src="/static/images/logo.png" width="120" height="120" alt="logo" />
                    </div>
                  </div>
                </Link>
              </div>
            </Link>
          </div>
          <div>
            <nav className="hidden sm:flex space-x-10 items-center">
              {headerNavLinks.map((link) => {
                return (
                  <Link key={link.title} href={link.href}>
                    <span className="min-h-[3rem] px-4 text-2xl font-bold active:scale-105 scale-110 active:transition-all duration-50 active:bg-white/10 hover:bg-white/10 flex justify-center items-center rounded-xl">
                      {link.title}
                    </span>
                  </Link>
                )
              })}
            </nav>
            <div className="flex relative ">
              <div className="sm:hidden top-[-40px] relative  ">
                <FramerNav navData={headerNavLinks} scrollDirection={scrollDirection} />
              </div>
            </div>
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
