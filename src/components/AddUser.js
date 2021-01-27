import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
//import './index.css'
import { 
    Form,
    Input,
    Button,
    PageHeader
} from 'antd'
const layout = {
  labelCol: {
      span: 3,
  },
  wrapperCol: {
    span: 10,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 3,
    span: 10,
  },
}

const AddUser = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
        <Fragment>
            <PageHeader
                className="site-page-header"
                //onBack={() => null}
                title="Colaboradores"
                subTitle="Alta de colaboradores"/>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Nombre completo"
                    name="name"
                    rules={[{
                        required: true,
                        message: 'Porfavor ingresa tu nombre completo',
                    }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Correo"
                    name="email"
                    rules={[{
                        required: true,
                        message: 'Porfavor ingresa el correo del colaborador',
                    }]}
                >
                    <Input 
                        type="email"/>
                </Form.Item>

                <Form.Item
                    label="Empresa"
                    name="company"
                    type="hidden"
                >
                    <Input 
                        disabled 
                        defaultValue="Testing"/>
                </Form.Item>      

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Fragment>        
    )
}

export default AddUser