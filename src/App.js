import React from 'react';
import Headerbar from './common-components/Header'
import Sidebar from './common-components/Sidebar'
import Routes from './config/Router'
import './index.css'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { TokenProvider } from './context/TokenContext'
import {
    BrowserRouter,
    Route,
    Switch,
    useHistory
} from 'react-router-dom'
import Authetication from './containers/Authentication'
import Registry from './containers/Registry'
import { withCookies, useCookies } from 'react-cookie'

const { Content } = Layout

function App() {
    const history = useHistory()
    const [cookies, setCookie, removeCookie] = useCookies(['token'])

    const logout = () => {
        removeCookie('token')
        ///history.push('/auth')
        //window.location.href = '/auth'
    }

    let open = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype.open = function() {
        this.addEventListener('load', (event) => event.target.status === 401 ? logout() : null, false)
        open.apply(this, arguments)
    }

    return (        
        <BrowserRouter> 
            <TokenProvider>                                       
                <Switch>
                    <Route exact path="/registry" component={Registry}/>
                    <Route exact path="/auth" component={Authetication}/>                    
                    <Layout className="dashboard">             
                        <Headerbar/>            
                        <Layout style={{ padding: '0 0px 24px' }}>
                            <Sidebar/>                
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                                >
                                <Routes/>
                            </Content>
                        </Layout>
                    </Layout>
                </Switch>
            </TokenProvider>         
        </BrowserRouter>      
    )
}

export default withCookies(App)