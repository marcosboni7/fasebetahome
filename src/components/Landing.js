
import React from "react";
import styled from 'styled-components';




const Landing = styled.div`

`
const CotainerInfos = styled.div`
.container-styled-info {
    width: 100%;
    height: 400px;
    margin-left: -5px;
    margin-top: 124px;
    background: white;
}
`
const TextsInformations = styled.div`

.modal-grid {
    width: 327px;
    height: 301px;
    margin-left: 161px;
    background-color: #fff;
    border: 2px solid #fff;
}
.row {
    margin-top: -321px;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    height: 266px;
    border-radius: 15px;
}
.row:hover {}
 
`


export default function Menu() {
    return (
        <>
            <Landing>

                <div className="container">
                    <strong style={{ fontSize: "50px" }}>
                        Informações pré
                        <h1 style={{ marginTop: "-14px", fontSize: "32px" }}>
                            orçamento e pedido
                        </h1>
                    </strong>

                </div>
                <CotainerInfos>
                    <div className="container-styled-info"></div>
                    <TextsInformations>
                        <section className="col-col-3">
                            <div className="container">

                                <div className="row">
                                    <div className="col" style={{ background: "yellow", borderRadius: "10px" }}>
                                        <div className="col-img">
                                            <div className="quantiy-text">
                                                <strong> Quantidade Minima </strong>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col order-12" style={{ background: "yellow", marginLeft: "52px", borderRadius: "10px" }}>
                                        <div className="quantiy-text">
                                            <strong> Quantidade Minima </strong>

                                        </div>
                                    </div>
                                    <div className="col order-1" style={{ background: "yellow", borderRadius: "10px", marginLeft: "62px" }}>
                                        <div className="quantiy-text">
                                            <strong> Quantidade Minima </strong>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </TextsInformations>

                </CotainerInfos>

            </Landing>
        </>
    );
}


