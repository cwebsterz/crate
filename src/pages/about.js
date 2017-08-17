import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <header className="h3 flex justify-between items-center bg-black-30">
        <div className="ml3">
          <i className="db tc hover-white icon ion-close" />
        </div>
        <div className="f4">
          <img
            alt="Logo"
            className="h3 w3"
            src="https://cdn.glitch.com/011e6829-7f06-454e-8fb9-2891947cf4a7%2Fcratelogo.svg?1501867486368"
          />
        </div>
        <div className="mr3">
          <i className="db tc hover-white ion-search" />
        </div>
      </header>

      <main className="vh-100 bg-white">
        <h4 className="tc">crate V 1.0</h4>
        <div className="tc">Developed by Cullen Webster</div>
        <div className="h3 flex flex-row justify-between items-center">
          <div className="ml5">
            <i className="db ion-social-twitter link grow" href="" />
          </div>
          <div>
            <i
              className="db ion-social-github link grow"
              link="www.github.com/cwebsterz"
            />
          </div>
          <div className="mr5">
            <i className="db ion-social-linkedin link grow" href="#" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutPage
