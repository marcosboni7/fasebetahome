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


 nav {
    background: #f5f5f5;
    width: 100%;
    height: 100px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      position: fixed;
 }
 nav ul li {

    display: inline-block;
    padding: 10px;
    margin-top: -14px;
    color: black;
    

 }
 nav ul li a {
  display:block;
  padding:38px 20px;
  transition: all 0.6s ease;
 }
 nav ul li a:hover {
color: yellow;
  height: 10px;
 }
 .titulo-blog, .titulo-blog:visited {
  color:#FBB829;
  font-weight:600;
  text-transform:uppercase;
 }
 a.titulo-blog:hover {
  background:none;
  color:#FBB829;
 }

 .btn{
	margin: 20px auto;
	border: none;
	padding: 10px 44px;
	font-size: 36px;
	position: relative;
	&::before{
		transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		content: '';
		width: 50%;
		height: 100%;
		background: black;
		position: absolute;
		top: 0;
		left: 0;
	}

	& .btn-text{
		color: white;
		// check out mdn docs for different types of blend modes. 
		mix-blend-mode: difference;
	}
	&:hover{
		&::before{
			background: black;
			width: 100%;
		}
	}
	//rounded btn styles
	&.rounded{
		border-radius:50px;
		& .text-green{
			color:#00F0B5;
			mix-blend-mode: difference;
		}
		
		&::before{
			border-radius: 50px;
			width: 25%;
			background: #00F0B5;
		}
		&:hover{
			&::before{
			background: #00F0B5;
				width: 100%;
			}
		}	
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
                <section className="menu">
                    <nav>
                        <ul>
                            <li><a href="#" className="titulo-blog"></a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Tecidos</a></li>
                            <li><a href="#">Cores</a></li>
                            <li><a href="#">Simulador</a></li>
                          
                            
                        </ul>
                    </nav>
                </section>

                <Imagem>
                    <img src="https://www.camisetasdecorrida.com.br/assets/img/slides/5.jpg" alt=""></img>
                </Imagem>

            </Container>
        </>
    );
}
