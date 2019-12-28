import styled from 'styled-components'

const AppBar = styled.div`
  background-color: blue;
`
const Navbar = ({ classes, router, pageProps: { auth } }) => {
  const { user = {} } = auth || {};
  return (
    <AppBar >
      { user._id ? (
        // Auth Navigation
        <div>
          <button>Profile</button>
          <button>Sign out</button>
        </div>
      ) : (
        // Unauth navigation
        <div>
          <button>Sign in</button>
          <button>Sign up</button>
        </div>
      )}
    </AppBar>
  )
};

export default Navbar;