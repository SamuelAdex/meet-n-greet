import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year = new Date();

  return (
    <Section>
        <div className="create">
            <Link className="create-meeting" to="/new-meeting">Create Meeting - It's free</Link>
        </div>
        <footer>
            <div className="footer-left">
                <span>Courtesy: Strong Tower Care Group</span>
            </div>
            <div className="footer-right">
                <span>&copy; {year.getFullYear()} Samuel Olaleye All Rights Reserved</span>
            </div>
        </footer>
    </Section>
  )
}

export default Footer

const Section = styled.section`
    display: grid;
    place-items:center;
    margin-top: 4em;


    .create{

        .create-meeting{
            padding: 20px 40px;
            text-decoration: none;
            background: #000;
            color: #fff;
            font-weight: bold;
            border: 5px solid #000;
            cursor: pointer;
            font-size: 20px;
            border-radius: 10px;
        }
    }

    footer{
        margin-top: 3rem;
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0 35px;

        span{
            font-weight: 500;
            font-size: 16px;
            color: #000;
            font-family: Fantasy;
        }
        @media screen and (max-width: 770px){
            flex-direction: column;
            justify-content: center;
            gap: 10px;

            .footer-left, .footer-right{
                text-align: center;
            }
        }
    }
`;