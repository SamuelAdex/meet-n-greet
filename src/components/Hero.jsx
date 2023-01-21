import React, {useState} from 'react'
import styled from 'styled-components';
import {BiSend} from 'react-icons/bi'
import {AiOutlineVideoCamera} from 'react-icons/ai'
import {BsCameraReels} from 'react-icons/bs'
import {Util} from '../helpers/util'

const util = new Util()

const Hero = () => {
    const [code, setCode] = useState("")
  return (
    <Section>
        <div className="hero-section">
            <h1>Fast, Reliable and Secure Conferencing</h1>
            <p>Hold Incredible Events, Free and Reliable Conference.</p>
            <div className="join-meeting">
                <div className="input-wrapper">
                    <input type="text" value={code} onChange={(e)=> setCode(e.target.value)} placeholder="Enter meeting Code (erl-id-xcz)" />
                    <button
                        onClick={()=>{
                            let a = document.createElement("a")
                            let isValidId = code.split("-");
                            if(!isValidId){
                                util.Alert("error", "Field can't be empty")
                            }else if(isValidId !== 3){
                                util.Alert("error", "Invalid meeting code")
                            }
                            else{
                                a.href = `http://127.0.0.1:5173/meeting-space${code}`
                                a.target = "_blank"
                                a.click()
                            }                              
                        }}
                    >
                        <BiSend size={25} />
                    </button>
                </div>
            </div>
            <span className="icon-1">
                <AiOutlineVideoCamera size={80} />
            </span>
            <span className="icon-2"></span>
              <span className="icon-3">
                  
            </span>
            <span className="icon-4">
                <BsCameraReels size={80} />
            </span>
        </div>
    </Section>
  )
}

export default Hero

const Section = styled.section`
    display: grid;
    place-items: center;

    .hero-section{
        width: 70%;
        text-align: center;
        padding-top: 6rem;        
        display: grid;
        place-items: center;        
        justify-content: center;

        h1{
            font-size: 70px;

            &::selection{
                background: #FFDD00;
            }
        }
        p{
            font-size: 30px;
            margin-top: 12px;
        }

        .join-meeting{
            margin-top: 25px;
            width: 50%;

            .input-wrapper{
                padding: 5px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                width: 100%;
                border: 3px solid #000;
                box-shadow: 0 1px 4px rgba(0,0,0,.05);

                input{
                    width: 100%;
                    padding: 20px 10px 20px;
                    border-radius: 2px;
                    font-weight: 600;                    
                    font-family: monospace;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px; 
                    border: none;                   

                    &:focus{
                        outline: none;
                    }
                }
                button{
                    background: #FFDD00;
                    cursor: pointer;
                    color: #000;
                    padding: 12px 50px;
                    border: 4px solid #000;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    transition: .3s ease-in-out;

                    &:hover, &:active{
                        background: #000;
                        color: #fff;
                    }                   
                }
            }
        }
        position: relative;
        
        .icon-4{
            position: absolute;
            left: 5px;
            top: 20px;
            transform: rotate(45deg);
        }
        .icon-1{
            position: absolute;
            bottom: 5px;
            right: 20px;
            transform: rotate(-45deg);
        }
        
        @media screen and (min-width: 300px) and (max-width: 791px){
            h1{
                font-size: 50px;
            }
            p{
                font-size: 25px;
            }

            .join-meeting{
                width: 100%;
            }

            .icon-1, .icon-4{
                display: none;
            }
        }

        @media screen and (max-width: 470px){
            width: 80%;
            h1{
                font-size: 35px;                            
            }
            p{
                font-size: 20px;
            }

            .join-meeting{
                .input-wrapper{
                    input{
                        padding: 10px;
                    }
                    button{
                        padding: 12px;
                    }
                }
            }
        }
    }
`;