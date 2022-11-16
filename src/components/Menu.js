import React from "react";
import styled from 'styled-components';


//MENU
const Container = styled.div`
 * {
overflow: hidden;
  margin:0;
  padding:0;
  list-style:none;
  text-decoration:none;
 }
 body {
  
    font-family: 'Poppins';font-size: 22px;
  font-size:18px;
 }
 a, a:visited {
    color: black;
 }

 * {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #Fff;
  }

  .logo {
    font-family: sans-serif;
    font-weight: bolder;
    font-size: 26px;
    color: white;
    text-decoration: none;
    line-height: 70px;
    margin-left: 20px;
    }

    nav ul {
        float: right;
        background-color: #Fff;
      }
        
     nav ul li {
        font-family: sans-serif;
        display: inline-block;
        font-size: 19px;
        line-height: 70px;
        padding: 0 15px;
      }
        
     nav ul li a {
       text-decoration: none;
       color: white;
     }
    
     nav ul li a:hover{
       color: #0460cb;
     }
     button {
        position: absolute;
        top: 50%;
        right: 20px;
        outline: none;
        border: 1px solid #eae2e2;
        color: white;
        transform: translateY(-50%);
        background-color: transparent;
        width: 80px;
        height: 40px;
        font-size: 20px;
        font-weight: bolder;
        display: none;
      }

      @media (max-width:738px) {
    
        button {
           display: block;
          }
          
        nav ul {
           position: absolute;
           top: 70px;
           width: 100%;
           display: none;
           padding-top: 20px;
           padding-bottom: 20px;
           padding-left: 10px;
           background: #014d90;
           border-top: 1px solid #000;
          }
          
        nav ul li {
           display: block;
           text-align: center;
          }
          
        .show {
          display: block;
          }
        }



`;
const Imagem = styled.div`

`
const ButtonOrçamento = styled.div`

`


export default function Menu() {
    return (
        <>
            <Container>


                <nav>
                    <a href="#" className="logo">MEU CUZAO</a>
                 
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                  
                    <button><span>MENU</span></button>
                </nav>





                <Imagem>
                    <img src="https://www.camisetasdecorrida.com.br/assets/img/slides/5.jpg" alt=""></img>
                </Imagem>

            </Container >
        </>
    );
}
