
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
const User = styled.div`


.sliderimg {
    width: 92px;
    height: 89px;
    margin-top: -106px;
    border-radius: 155px;
}

`

export default function Menu() {
    return (
        <>

            <ContainerDepoimentos>
                <div className="depoimentos">
                    <stronge>

                    </stronge>
                </div>

                <div style={{ marginTop: "-263px" }}>


               


                    <AliceCarousel autoPlay autoPlayInterval="3000">


                        <div className="col-user"
                            style={{ background: "white", width: "516px", height: "184px", marginLeft: "440px" }}>



                            <strong
                                style={{ fontSize: "32px" }}>Manuela</strong>

                            <div style={{ marginTop: "29px" }} className="user-text">
                                <strong style={{ color: "#554355;" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi.
                                </strong>
                            </div>
                        </div>



                        <div className="col-user"

                            style={{ background: "white", width: "516px", height: "184px", marginLeft: "440px", margin: "-33" }}>

                            <strong

                                style={{ fontSize: "32px" }}>Jessica</strong>

                            <div style={{ marginTop: "29px" }} className="user-text">
                                <strong style={{ color: "#554355;" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi.
                                </strong>

                            </div>
                        </div>


                    </AliceCarousel>
                </div>

            </ContainerDepoimentos >


        </>
    );
}
