import React, { useEffect, useState } from 'react'
import { getPlans } from '../services/ListPlans.service'
import { Card, Button } from 'antd'
import { SelectOutlined } from '@ant-design/icons';
import './styles/ListPlans.css'

const ListPlans = ({ setChoosePlan }) => {
    const [plans, setPlans] = useState([])
    const [dataPlan, setDataPlan] = useState(0)    
    
    const buildCards = async () => {
        const result = await getPlans()

        if(result.error) {
            console.error(result.error)
            return
        }

        const {data: {data}} = result.response        
                
        setPlans(data.map(d => (
            <Card
                key={d.id}
                className="plan"
                hoverable
                style={{ width: 240 }}
                cover={
                    <img 
                        alt="example" 
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    }
                >
                
                <Card.Meta/>
                <h3>{d.name}</h3>
                <h3>Precio: ${d.price}</h3>
                <h5>Descripción: {d.description}</h5>
                <Button 
                    onClick={() => {
                        setDataPlan(d)
                        setChoosePlan(d)
                    }}
                    type="primary" 
                    shape="round" 
                    icon={<SelectOutlined />}
                    size="large"
                >
                    Seleccionar
                </Button>
            </Card>
        )))
    }
    

    useEffect(() => {
        buildCards()
    }, [])

    return (
        <>
            <div>
                <h1>Plan seleccionado: {dataPlan.name}</h1>
            </div>
            <div className="plans-box">
                {plans}
            </div>
        </>
    )
}

export default ListPlans