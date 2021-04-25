import { Campaign } from "../components/campaign";
// import GlobalStyles from './../components/GlobalStyles'

const App = ({ Component, pageProps }) => (
  <div>
    {/* <GlobalStyles /> */}
    <Component {...pageProps} />
  </div>
)

export default App