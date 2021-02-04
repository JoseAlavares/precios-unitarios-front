import React, { useState } from 'react'
import ListPlans from './ListPlans'
import { 
	SmileOutlined,
	BankOutlined,
	MailOutlined,
	IdcardOutlined,
	EyeOutlined,
} from '@ant-design/icons'
import { 
    Form,
    Input,
	Select,
	Button,
	Alert,
	Card
} from 'antd'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
import { saveRegistry } from '../services/RegistryForm.sevice'

const { Option } = Select

const RegistryForm = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['token'])
	const [loading, setLoading] = useState(false)
	const [showAlert, setShowAlert] = useState(false)
	const [seePlans, setSeePlans] = useState(false)
	const [choosePlan, setChoosePlan] = useState(null)
	const [dataForm, setDataForm] = useState({})
	const [alertConf, setAlertConf] = useState({})
	const history = useHistory()

	const handle = () => {
		setDataForm(...dataForm)
	}
	
	const onFinish = async (values) => {
		setLoading(true)

		if(values.password !== values.confirm_password) {
			setShowAlert(true)		
			setAlertConf({
				message: "Las contraseñas no coinciden"
			})

			setTimeout(() => {
				setShowAlert(false)
				setLoading(false)
			}, 3000)

			return
		}

		//const validateUser = ['name', 'email', 'password', 'rol', 'profile_picture']
		//const validateCompany = ['plan_id', 'company_name', 'rfc', 'company_email', 'legal_representative']
		setDataForm({
			name: values.name,
			personal_email: values.personal_email,
			password: values.password,
			rol: values.rol || 1,
			profile_picture: values.profile_picture || "test",
			plan_id: values.plan_id,
			company_name: values.company_name,
			rfc: values.rfc,
			company_email: values.company_email,
			legal_representative: values.name,			
		})
		setSeePlans(!seePlans)
		/*const result = await saveRegistry({
			name: values.name,
			personal_email: values.personal_email,
			password: values.password,
			rol: values.rol || 1,
			profile_picture: values.profile_picture || "test",
			plan_id: values.plan_id,
			company_name: values.company_name,
			rfc: values.rfc,
			company_email: values.company_email,
			legal_representative: values.name,			
		})

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
		history.push('/')*/
	}

	return(
		<>
		{!seePlans ?
        <div className="registry-container">
			{
				showAlert
				? <Alert type="error" message={alertConf.message || ""} banner/>
				: null
			}
			<h3 className="registry-title">Registra tu nueva cuenta</h3>
			<Form 
				name="registry_login"
				className="registry-form"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}>
				<label>Nombre completo</label>
				<Form.Item
					name="name"
					validateStatus="validating"
					help="Debe contener unicamente letras"
					rules={[{
						required: true,
						message: 'Please input your name complete'
					}]}
				>
					<Input prefix={<SmileOutlined/>} placeholder="" name="name" />
				</Form.Item>

				<label>Correo personal</label>
				<Form.Item
					name="personal_email"
					validateStatus="validating"
					help="Debe ser un correo valido"
					rules={[{
						required: true,
						message: 'Please input your name complete'
					}]}
				>
					<Input prefix={<MailOutlined />} name="personal_email"/>
				</Form.Item>

				<label>Contraseña</label>
				<Form.Item
					name="password"
					validateStatus="validating"
					help="Debe ser contener mas de 6 caracteres"
					rules={[{
						required: true,
						message: 'Please input your name complete'
					}]}
				>
					<Input.Password prefix={<EyeOutlined />} name="password"/>
				</Form.Item>

				<label>Confirmar contraseña</label>
				<Form.Item
					name="confirm_password"
					validateStatus="validating"
					help="Las contraseñas deben conincidir"
					rules={[{
						required: true,
						message: 'Please input your name complete'
					}]}
				>
					<Input.Password prefix={<EyeOutlined />} name="confirm_password"/>
				</Form.Item>

				<label>Correo de la empresa</label>
				<Form.Item 
					name="company_email"
					validateStatus="validating" 
					help="Debe ser un correo valido"
					rules={[{
						required: true,
						message: 'Please input your name complete'
					}]}
				>
					<Input prefix={<MailOutlined />} placeholder="" name="bussines_email"/>
				</Form.Item>

				<label>Nombre de la empresa</label>
				<Form.Item
					name="company_name"
					validateStatus="validating"
					help=""
					rules={[{
						required: true,
						message: 'Please input your name complete'
					}]}
				>
					<Input prefix={<BankOutlined />} placeholder="" id="validating" />
				</Form.Item>

				<label>RFC de la empresa "regimen federal de contribuyente"</label>
				<Form.Item
					name="rfc"
					validateStatus="validating"
					rules={[{
						required: true,
						message: 'Please input your name complete'
					}]}
				>
					<Input prefix={<IdcardOutlined />} placeholder=""  name="rfc"/>
				</Form.Item>    		

				<label>Planes de contratación</label>
				<Form.Item 
					name="plan_id"
					validateStatus="validating"
					rules={[{
						required: true,
						message: 'Please input your name complete'
					}]}
				>
					<Select allowClear>
						<Option value="0">Seleccione un plan</Option>
						<Option value="1">Basico</Option>
						<Option value="2">Medio</Option>
						<Option value="3">Premium</Option>
					</Select>
				</Form.Item>

				<Form.Item>
					<Button
						//loading={loading}
						//onClick={() => setSeePlans(!seePlans)}
						type="primary"						
						htmlType="submit"
						className="login-form-button"						
					>
						Continuar
					</Button>
				</Form.Item>   		
  			</Form>			
		</div>
		:
		<>
			<ListPlans setChoosePlan={setChoosePlan}/>
			<Button 
				onClick={(e)=> {
					console.log(dataForm)
				}}
				type="primary"						
				htmlType="submit"
				className="login-form-button"
			>
				form
			</Button>
		</>
		}
		</>
    )
}

export default RegistryForm
