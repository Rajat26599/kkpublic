import { useEffect, useState } from "react"
import Form from "../../components/form/Form"
import Input from "../../components/input/Input"
import { Row, LoginWrapper, RadioWrapper } from "./styles"
import Button from '../../components/button/Button'
import globalStyles from "../../data/constants/globalStyles"
import Circles from "../../layouts/circles/Circles"
import { useNavigate } from "react-router-dom"
import P from "../../components/p/P"

// REDUX TOOLKIT
import { useDispatch } from 'react-redux'
import { login } from "../../redux-toolkit/authSlice"

const Login = () => {
    const [ radioVal, setRadioVal ] = useState('mobile')

    const [ password, setPassword ] = useState('')
    const [ mobile, setMobile ] = useState('')
    const [ email, setEmail ] = useState('')

    const [ mobileError, setMobileError ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const peach = globalStyles.colors.peach
    const navyBlue = globalStyles.colors.navyBlue
    
    const dataForCircles = [
        {
            radius: '40px',
            bgcolor: peach,
            position: {x: '90%', y: '100px'},
            animationPath: 3,
        },
        {
            radius: '60px',
            bgcolor: peach,
            position: {x: '5%', y: '200px'},
            animationPath: 3,
        },
        {
            radius: '80px',
            bgcolor: peach,
            position: {x: '95%', y: '500px'},
            animationPath: 3,
        },
        {
            radius: '20px',
            bgcolor: navyBlue,
            position: {x: '3%', y: '400px'},
            animationPath: 1,
        },
        {
            radius: '50px',
            bgcolor: navyBlue,
            position: {x: '95%', y: '300px'},
            animationPath: 2,
        },
    ]
    
    const isEmailValid = () => {
        return email.match(
            //eslint-disable-next-line
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleEmailChange = (e) => {
        let val = e.target.value
        setEmail(val)
    }

    const handleMobileChange = (e) => {
        let val = e.target.value
        if(isNaN(+val)) {
            setMobileError('Only numbers are allowed')
        } else if(val.length > 10) {
            setMobileError('Mobile number can not be greater than 10 digits')
        } else {
            setMobile(val);
            setMobileError('')
        }
    }

    const handlePasswordChange = (e) => {
        let val = e.target.value
        console.log(val)
        if(val.includes(' ')) {
            setPasswordError('Password can not contain spaces')
        } else {
            setPassword(val)
            setPasswordError('')
        }
    }

    const isInputValid = () => {
        if(radioVal === 'mobile') {
            if(mobile === '') {
                setMobileError('Mobile number is requried')
                return false
            } else if (mobile.length < 10) {
                setMobileError('Mobile number is invalid')
                return false
            }
        } else if(radioVal === 'email') {
            if(email === '') {
                setEmailError('Email address is requried')
                return false
            } else if(!isEmailValid()) {
                setEmailError('Email is invallid')
                return false
            }
        } else if(password === '') {
            setPasswordError('Password is requried')
            return false
        }
        return true
    }

    const handleSubmit = () => {
        if(isInputValid()) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(radioVal === 'email' ? {
                    mode: radioVal,
                    email: email,
                    password: password
                } : {
                    mode: radioVal,
                    mobile: mobile,
                    password: password
                })
            }
            fetch(process.env.REACT_APP_SERVER_URL + '/login', requestOptions)
                .then(r => r.json())
                .then(res => {
                    if(res.success) {
                        dispatch(login({data: {...res.data, loggedin: true}}))
                        navigate('/dashboard')
                    }
                })
        }
    }

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <LoginWrapper>
            <Circles data={dataForCircles} />
            <Form heading='Login' width='50%'>
                <Row>
                    <RadioWrapper onClick={() => setRadioVal('mobile')}>
                        <Input type='radio' name='radio' value={'mobile'} checked={radioVal === 'mobile'} />
                        <P>Moblie</P>
                    </RadioWrapper>
                    <RadioWrapper onClick={() => setRadioVal('email')}>
                        <Input type='radio' name='radio' value={'email'} checked={radioVal === 'email'} />
                        <P>Email</P>
                    </RadioWrapper>
                </Row>
                {
                    radioVal === 'mobile' ?
                    <Input type='tel' label='Mobile' name='mobile' value={mobile} onChange={handleMobileChange} error={mobileError} onBlur={handleMobileChange} />
                    :
                    <Input type='email' label='Email' name='email' value={email} onChange={handleEmailChange} error={emailError} />
                }
                <Input 
                    type='password' 
                    label='Password' 
                    name='password' 
                    value={password}
                    error={passwordError}
                    showEye
                    onChange={handlePasswordChange} 
                    onBlur={handlePasswordChange}
                    />

                <Button bgcolor={globalStyles.colors.peach} type='button' onClick={handleSubmit}>Login</Button>
            </Form>
        </LoginWrapper>
    )
}

export default Login