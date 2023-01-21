import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {SiBuymeacoffee} from 'react-icons/si'
import {AiOutlineVideoCamera} from 'react-icons/ai'

const Header = () => {
  return (
    <Section>
        <nav>
            <div className="logo">
                <AiOutlineVideoCamera className="mobile" size={50} />
                <AiOutlineVideoCamera className="desktop" size={33} />
                <span>MEETnGREET</span>
            </div>
            <div className="menu">
                <a href="https://www.buymeacoffee.com/adexsamuel" target="_blank">
                    <span className="donate">
                        <SiBuymeacoffee size={20} />
                        Donate
                    </span>
                </a>
                <Link to="/new-meeting">
                    <span className="new">New Meeting</span>
                </Link>
            </div>
        </nav>
    </Section>
  )
}

export default Header

const Section = styled.header`
    padding: 40px 80px;
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo{
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 20px;
            font-weight: 900;
            cursor: pointer;

            .mobile{
                display: none;
            }
        }

        .menu{
            display: flex;
            align-items: center;
            gap: 20px;

            a{
                text-decoration: none;
            }

            .donate{
                padding: 15px 40px;
                border-radius: 10px;
                background-color: #FFDD00;
                color: #000;
                display: flex;
                gap: 12px;
                font-size: 20px;
                font-weight: 600;                
                border: 5px solid #000;
                transition: .3s ease-in-out;
                
                &:hover,&:active{
                    background: white;
                }
            }

            .new{
                padding: 20px 40px;
                border-radius: 10px;                
                color: #fff;
                background-color: #000;
                cursor: pointer;
                font-weight: 600;
                font-size: 20px;

                &:hover, &:active{
                    opacity: 0.8;

                }
            }
        }
        @media screen and (max-width: 500px){
            .logo{
                .mobile{
                  display: flex;
                }
                .desktop{
                    display: none;
                }
                span{
                    display: none;
                }
            }
        }
        @media screen and (min-width: 300px) and (max-width: 791px){            
            .menu{                
                .new{
                    display: none;
                }
                .donate{
                    padding: 15px 30px;
                    font-size: 16px;                    
                }
            }
        }
    }
    @media screen and (min-width: 300px) and (max-width: 791px){
        padding: 20px 40px;
    }
    @media screen and (max-width: 500px){
        padding: 20px;
    }

`;