import { useState } from 'react'
import { AppRouter, Container, MenuHamburger, Sidebar, ThemeContextProvider } from '.'

function App() {

  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  return (
    <ThemeContextProvider>
      <Container className={openSideBar ? 'active' : ''}>
        <section className='contentSideBar'><Sidebar state={openSideBar} setState={setOpenSideBar} /></section>
        <section className='contentMenuHamburger'><MenuHamburger /></section>
        <section className='contentRoutes'>
          <AppRouter />
        </section>
      </Container>
    </ThemeContextProvider>
  )
}

export default App
