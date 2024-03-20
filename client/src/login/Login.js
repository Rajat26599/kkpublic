import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginWrapper } from "./styles"
import { Button } from "../common/button/Button"
import { Input } from "../common/input/Input"
import { Form } from "../common/form/Form"
import { Alert } from "../common/alert/Alert"
import { endpoints } from "../util/endpoints"

const Login = () => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')

    const navigate = useNavigate()

    const validate = () => {
        if(!username) setError('Username can not be empty.')
        else if(!password) setError('Password can not be empty.')
        else setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validate()
        fetch(process.env.REACT_APP_SERVER_URL + endpoints.AUTH_LOGIN, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.status==='success') {
                    console.log(data)
                    setUsername('')
                    setPassword('')
                } else if(data.status==='error') {
                    console.log(data.errorDesc)
                }
            })
            .catch(e => console.log(e))
    }

    return (
        <LoginWrapper>
            <Form>
                {
                    error && <Alert>{error}</Alert>
                }
                <Input
                    type='text'
                    name='username'
                    label={'Username'}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type='password'
                    name='password'
                    label={'Password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button onClick={handleSubmit}>Submit</Button>
                <Button onClick={() => navigate('/')}>Back</Button>
            </Form>
        </LoginWrapper>
    )
}

export default Login