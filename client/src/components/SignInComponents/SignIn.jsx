import React, { useRef } from 'react'
import styled from 'styled-components';
import { UseAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import fb from '../SignUpComponents/fb.png';
import gl from '../SignUpComponents/gmail.png'
import yh from '../SignUpComponents/yahoo.png'

const Login = () => {
    const { currentUser, signIn, logOut, login } = UseAuth();
    const emailRef = useRef();
    const passwordRef = useRef();


    function handleSubmit(e) {
        e.preventDefault();
        try {
            login(emailRef.current.value, passwordRef.current.value);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Container>
            {currentUser && <Navigate to="/"></Navigate>}
            <Picture>
                <img src={require("../SignInComponents/bg.png")} alt="" />
                <LoginBanner>
                    <h1>New here?</h1>
                    <h3>Create an account</h3>
                    <button onClick={()=>{
                        window.location = '/signup'
                    }}>Sign Up</button>
                </LoginBanner>
            </Picture>
            <LoginForm onSubmit={handleSubmit}>
                <Title>
                    Welcome back!
                </Title>
                <SubTitle>Continue using social media</SubTitle>
                <SocialMedias>
                    <FBLogo>
                    </FBLogo>
                    <GmailLogo></GmailLogo>
                    <YahooLogo></YahooLogo>
                </SocialMedias>
                <OR>
                    <span></span>
                    <p>or</p>
                    <span></span>
                </OR>
                <TextField>
                    <InputText ref={emailRef} placeholder="Email" type="email"></InputText>
                    <InputText ref={passwordRef} placeholder="Password" type="password"></InputText>
                </TextField>
                <LoginButton>Sign In</LoginButton>
            </LoginForm>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 90vh;
    box-sizing: border-box;
    
`;

const Picture = styled.div`
    width: 40vw;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
    position: relative;
`;

const LoginBanner = styled.div`
        margin-top: 2em;
        width: 100%;
        height: 400px;
        position: absolute;
        top: 10px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    *{
        max-width: 70%;
        text-align: center;
    }

    h3{
        color: #D8D8D8;
        font-weight: 400;
    }

    button{
        background-color: #3B80FF;
        border: none;
        margin-top: 0.5em;
        padding: 0.5em 3em;
        border-radius: 18px;
        color: white;
        font-weight: bold;
        &:hover {
            background-color: #3D4849;
          }
    }
`;

const LoginForm = styled.form`
    width: 60vw;
    height: 100%;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`

`;

const SubTitle = styled.h2`
    color: gray;
    font-weight: 200;
    font-size: 1.5em;
    margin-bottom: 1em;
`;

const SocialMedias = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
`;

const FormForLogin = styled.form``;

const TextField = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: stretch;
    gap: 0.8em;
`;
const Label = styled.h3``;
const InputText = styled.input`
    height: 2.5em;
    border-radius: 10px;
    border: 2px solid gray;
`;

const LoginButton = styled.button`
    margin-top: 0.5em;
    padding: 0.5em 3em;
    border: none;
    border-radius: 18px;
    background-color: #EB4B4B;
    color: white;
    &:hover {
        background-color: #3D4849;
      }
`;

const OR = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
    margin-bottom: 1em;
    width: 100%;
    justify-content: center;
    
    span{
        width: 20%;
        height: 1px;
        border: 1px solid gray;
    }
    p{
        margin: 0px;
    }
`;


const FBLogo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url(${fb});
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #3a8edd;
    
`;

const GmailLogo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-image: url(${gl});
    background-size: 80%;
    background-position: center;
    background-color: #c62828;
    
`;

const YahooLogo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-image: url(${yh});
    background-size: 90%;
    background-position: center;
    background-color: #5b6bc0;
    
`;

export default Login