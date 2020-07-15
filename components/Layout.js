import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = (props) => (
    <div style={{textAlign: "center"}}>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
        
    </div>
)

export default Layout;