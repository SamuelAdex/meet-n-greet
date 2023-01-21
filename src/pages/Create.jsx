import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import {Util} from '../helpers/util'


const util = new Util()

const Create = () => {
    const [meetingId, setMeetingId] = useState("")
    const [startMeeting, setStartMeeting] = useState(false)
    const [loading, setLoading] = useState(true)

    useState(()=>{
        setTimeout(()=> setLoading(false), 5000)
    },[])

    const createMeeting = () => {
        let formatted = `${util.genId(4)}-${util.genId(4)}-${util.genId(4)}`
        setMeetingId(formatted)

        setStartMeeting(true);
    }

  return (
    <Section>
        <Header /> 
        {loading && <div>
            
        </div>}
        {!loading && <div className="create-wrapper">            
            <button className="get-link" onClick={createMeeting}>GENERATE LINK</button>
            {startMeeting && <MeetingComponent id={meetingId} />}
        </div>}        
    </Section>
  )
}


const MeetingComponent = ({id}) => {
    const [isLoading, setIsLoading] = useState(true);
    let link = `http://127.0.0.1:5173/meeting-space/${id}`;

    setTimeout(() => setIsLoading(false), 5000);

    return (
        <div className="meeting">
            {isLoading && (
                <div className="spinner-wrapper">
                    <div className="spinner">

                    </div>
                </div>
            )}
            {!isLoading && (
                <div className="meeting-info">
                    <h1>{id.toUpperCase()}</h1>
                    <div className="link-wrapper">
                        <button className="copy"
                            onClick={()=>{
                                navigator.clipboard.writeText(link)
                                util.Alert("success", "Link Copied")               
                            }}
                        >
                            Copy Link
                        </button>
                        <button className="join"
                            onClick={() => {
                                let a = document.createElement('a')

                                a.href = link;
                                a.target = "_blank"
                                a.click()
                            }}
                        >Join Meeting</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Create

const Section = styled.section`
    height: 100vh;
    .create-wrapper{
        display: grid;
        place-items: center;
        min-height: 50%;

        .spinner-wrapper{
            display: grid;
            place-items: center;

            .spinner{
                padding: 35px;
                border-radius: 100%;
                border: 7px solid grey;
                border-top: 5px solid #000;
                animation: loader .8s infinite linear;
            }

            @keyframes loader{
                to{
                    transform: rotate(0deg)                    
                }
                from{
                    transform: rotate(360deg)
                }
            }
            
            
        }
        .meeting-info{

            h1{
                font-size: 40px;
            }

            .link-wrapper{
                display: flex;
                justify-content: center;
                gap: 20px;
                margin-top: 20px;

                button{
                    padding: 20px 40px;
                    border: none;
                    border-radius: 10px;
                    color: #fff;
                    font-weight: bold;  
                    cursor: pointer;  
                    transition: .3s ease-in-out;                
                }
                .copy{
                    background: #000;
                    
                    &:active, &:hover{
                        background: #fff;
                        color: #000;
                        border: 3px solid #000;
                    }
                }
                .join{
                    background: #fff;
                    border: 3px solid #000;
                    color: #000;

                    &:active, &:hover{
                        background: #000;
                        color: #fff;
                    }
                }
            }
        }

        .get-link{
            padding: 20px 40px;
            border-radius: 10px;
            border: none;
            color: #fff;
            background: #000;
            font-weight: bold;
            cursor:  pointer;

            &:active, &:hover{
                opacity: .8;
            }
        }
    }
`;