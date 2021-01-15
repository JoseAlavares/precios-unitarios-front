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
    Switch
} from 'react-router-dom'
import Authetication from './containers/Authentication'
import Registry from './containers/Registry'
import { withCookies } from 'react-cookie'

const { Content } = Layout

function App() {    
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