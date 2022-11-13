
import React from "react";
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



const ContainerDepoimentos = styled.div`

.depoimentos {
    width: 100%;
height: 400px;
margin-left: -5px;
margin-top: 124px;
background: #ffde00;
}
.sliderimg{
    width: 100%;
    height: 500px;
    object-fit: cover
  }
  .alice-carousel__prev-btn-item {
    background: black;
    border-radius: 20px;

    .alice-carousel__prev-btn {
        margin-top: 50px;
    }

  }
`



export default function Menu() {
    return (
        <>

            <ContainerDepoimentos>
                <div className="depoimentos">
                    <stronge>
                        <h2 style={{ fontSize: "50px" }}>Depoimentos</h2>
                    </stronge>
                </div>

                <div style={{ marginTop: "-263px" }}>
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                    <strong>
                        Meu nome é Santiago Mendonça, sou responsável técnico pela equipe Pro Runner. Em 2008, quando começamos os trabalhos em Criciúma, conheci a Camisetas de Corrida. Naquele tempo em diante eu conto com a qualidade e o atendimento que considero os melhores do mercado, e isto que já passei por algumas situações...


                        </strong>
                        <img style={{ width: "560px", height: "202px" }} src={"https://st3.depositphotos.com/3591429/18431/i/450/depositphotos_184311644-stock-photo-white-background-template-for-copy.jpg"} className="sliderimg" />
                        <strong>
                        Meu nome é Santiago Mendonça, sou responsável técnico pela equipe Pro Runner. Em 2008, quando começamos os trabalhos em Criciúma, conheci a Camisetas de Corrida. Naquele tempo em diante eu conto com a qualidade e o atendimento que considero os melhores do mercado, e isto que já passei por algumas situações...


                        </strong>
                        <img style={{ width: "560px", height: "202px" }} src={"https://st3.depositphotos.com/3591429/18431/i/450/depositphotos_184311644-stock-photo-white-background-template-for-copy.jpg"} className="sliderimg" />
                        <strong>
                        Meu nome é Santiago Mendonça, sou responsável técnico pela equipe Pro Runner. Em 2008, quando começamos os trabalhos em Criciúma, conheci a Camisetas de Corrida. Naquele tempo em diante eu conto com a qualidade e o atendimento que considero os melhores do mercado, e isto que já passei por algumas situações...


                        </strong>
                        <img style={{ width: "560px", height: "202px" }} src={"https://st3.depositphotos.com/3591429/18431/i/450/depositphotos_184311644-stock-photo-white-background-template-for-copy.jpg"} className="sliderimg" />
                        <img style={{ width: "560px", height: "202px" }} src={"https://st3.depositphotos.com/3591429/18431/i/450/depositphotos_184311644-stock-photo-white-background-template-for-copy.jpg"} className="sliderimg" />
                    </AliceCarousel>
                </div>
                <div className="user-photo">
                        </div>
            </ContainerDepoimentos>


        </>
    );
}
