import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './Enquiry.css';
import styled from 'styled-components';
import { UseAuth } from '../../context/AuthContext';
import { doc, collection, setDoc } from "firebase/firestore";
import { db } from '../../firebase';
import listings from './listings.png'

function Enquire() {
  const dateRef = useRef();
  const typeRef = useRef();
  const yearRef = useRef();
  const monthRef = useRef();
  const yesRef = useRef();
  const noRef = useRef();
  const [takeProperty, setTakeProperty] = useState();
  const {currentUser} = UseAuth();


  function handleTakeProperty(willTake){
    if(willTake){
      setTakeProperty(true);
    }else{
      setTakeProperty(false);
    }
  }

  useEffect(()=>{

    if(takeProperty){
      noRef.current.classList.remove("selected")
      yesRef.current.classList.add("selected");
    }else if(takeProperty == false){
      yesRef.current.classList.remove("selected")
      noRef.current.classList.add("selected");
    }
  },[takeProperty])

  function handleSubmit(e){
    e.preventDefault();
    if(!currentUser){
      alert("Sign In first!");
      window.location = "/login"
      return;
    }
    if(takeProperty == null){
      alert("Select if you will take the property first");
      return;
    }
    const application = {
      takePropertyDate: dateRef.current.value,
      tenancyType: typeRef.current.value,
      propertyYearDuration: yearRef.current.value,
      propertyMonthDuration: monthRef.current.value,
      willTakeProperty: takeProperty
    }

    const userRef = doc(collection(db, 'applications'), currentUser.uid)
    setDoc(userRef, application).then(()=>{
      alert("Application Submitted!");
    })

    console.log(application)
  }

  return (
    <>
    <Listings src={listings} alt=""  />
    <Blur></Blur>
    <Container>
      <ApplyForm onSubmit={(e)=>handleSubmit(e)}>
        <Banner>Enquire</Banner>
        <Question>
          <Label>When can you take the property?<Red>*</Red></Label>
          <input ref={dateRef} type="date" name="" id="" required />
        </Question>
        <Question>
          <Label>Preferred tenancy type:<Red>*</Red></Label>
          <select ref={typeRef} name="" id="">
            <option value="default">--select--</option>
            <option value="fixed">Fixed</option>
            <option value="periodic">Periodic</option>
          </select>
        </Question>
        <Question>
          <Label>How long do you want the property for?<Red>*</Red></Label>
          <select ref={yearRef} name="" id="">
            <option value="default">Years</option>
            <option value="1">1 Year</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="4">4 Years</option>
            <option value="5+">More than 5 Years</option>
          </select>
          <select ref={monthRef} name="" id="">
            <option value="default">Months</option>
            <option value="1">1 Month</option>
            <option value="2">2 Months</option>
            <option value="3">3 Months</option>
            <option value="4">4 Months</option>
            <option value="5">5 Months</option>
            <option value="6">6 Months</option>
            <option value="7">7 Months</option>
            <option value="8">8 Months</option>
            <option value="9">9 Months</option>
            <option value="10">10 Months</option>
            <option value="11">11 Months</option>
          </select>
        </Question>
        <Question>
          <Label>Have you viewed the property?<Red>*</Red></Label>
          <div>
            <OptionButton ref={yesRef} onClick={()=>{handleTakeProperty(true)}} type="button">Yes</OptionButton>
            <OptionButton ref={noRef} onClick={()=>{handleTakeProperty(false)}} type="button">No</OptionButton>
          </div>
        </Question>
        <SaveListing>SaveListing</SaveListing>
        <SubmitApplication>Enquire</SubmitApplication>
      </ApplyForm>
    </Container>
    </>
  );
}

const Listings = styled.img`
  display: block;
  margin: 0 auto;
  width: 80%;
`;

const Blur = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  background-color: #0000003b;
`;

const Container = styled.div`

  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ApplyForm = styled.form`
  width: 400px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-bottom: 1em;

`;

const Banner = styled.h2`
  text-align: center;
  background-color: #f85873;
  padding: 0.5em;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 10px 1em;

  input, select{
    padding: 10px;
    border-radius: 5px;
    border: 2px solid gray;
    margin-bottom: 5px;
  }
`;
const Label = styled.p`
  margin-bottom: 0px;
`;

const Red = styled.span`
  color: red;
`;

const OptionButton = styled.button`
  color: #f85873;
  margin: 0px 5px;
  border: 1px solid gray;
  border-radius: 3px;
`;

const SaveListing = styled.button`
  border: 1px solid gray;
  margin: 0px 1em;
  margin-bottom: 0.5em;
  width: 50%;
  background-color: #f85873;
  color: white;
  border-radius: 5px;
`;

const SubmitApplication = styled.button`
  border: 1px solid gray;
  margin: 1px 1em;
  border-radius: 5px;
  &:hover {
    background-color: #a1a1a1;

`;

export default Enquire;