import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { Form, Input, Button, Alert } from 'antd'
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons'
import { login, loginGoogle } from '../services/AuthenticationForm.service'

const AutheticationForm = ({ token }) => {
	const [cookies, setCookie, removeCookie] = useCookies(['token'])
	const [loading, setLoading] = useState(false)
	const [showAlert, setShowAlert] = useState(false)
	const [alertConf, setAlertConf] = useState({})
	const history = useHistory()

	useEffect(() => {
		if(cookies.token) {
			history.push('/home')
		}
	})

	const onFinish = async (values) => {
		setLoading(true)
		const result = await login(values)
		
		if(result.error) {
			setShowAlert(true)
			setAlertConf({
				message: result.message
			})
			
			setTimeout(() => {
				setShowAlert(false)
				setLoading(false)
			}, 3000)

			return
		}

		const {data: {data}} = result.response
		
		setLoading(false)
		setCookie('token', data, {
			//httpOnly: true, 
			sameSite: 'strict', 
			secure: true
		})
		
		history.push('/')
	}

	const authGoogle = () => {
		//loginGoogle()
		console.log('ok')
		window.location.href = `${process.env.REACT_APP_API}/auth/google`
	}
	  
  	return (
		<>		
		<div className="container">
			{
				showAlert 
				? <Alert type="error" message={alertConf.message || ""} banner/> 
				: null
			}
			<h3 className="login-title">Autenticacíon</h3>
			<Form
				name="authentication_login"
				className="login-form"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}>
				<Form.Item
					name="email"
					required
					rules={[{
						required: true,
						message: 'Please input your email!',
					}]}>
					<Input 
						prefix={<UserOutlined className="site-form-item-icon" />} 
						placeholder="Username" />
				</Form.Item>
				<Form.Item
					name="password"
					required
					rules={[{
						required: true,
						message: 'Please input your Password!',
					}]}>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
						rules={[{
							required: true,
							message: 'Please input your password!',
						}]}
						/>
				</Form.Item>
				<Form.Item>
					{/*<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Remember me</Checkbox>
					</Form.Item>*/}

					<a className="login-form-forgot" href="">
						olvide mi contraseña
					</a>
				</Form.Item>

				<Form.Item>
					<Button
						loading={loading}
						type="default" 
						icon={<GoogleOutlined/>}
						htmlType="button"
						onClick={authGoogle} 
						className="login-form-button">
					Google
					</Button>
					<Button
						loading={loading}
						type="primary" 
						htmlType="submit" 
						className="login-form-button">
					Acceder
					</Button>
					O <Link to="/registry">registrarse!</Link>
				</Form.Item>
			</Form>
		</div>
		</>
    )
}

export default AutheticationForm