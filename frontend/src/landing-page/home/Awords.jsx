import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

function Awords() {
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-6 p-5">
                        <img src=" media/largestBroker.svg" alt="image" />
                    </div>
                    <div className="col-6 p-5 mt-5">
                        <h1>Largest Stock broker in india</h1>
                        <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in: </p>
                         
                         <div className="row">
                            <div className="col-6">
                                <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                         </ul>
                           <ul>
                            <li>
                                <p>ommodity derivatives</p>
                            </li>
                         </ul>
                           <ul>
                            <li>
                                <p>currency derivative</p>
                            </li>
                         </ul>
                            </div>
                            <div className="col-6">
                                  <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                         </ul>
                           <ul>
                            <li>
                                <p>Direct Mutual funds</p>
                            </li>
                         </ul>
                           <ul>
                            <li>
                                <p>Bonds and Govt. securities </p>
                            </li>
                         </ul>

                                
                         </div>
                         
                            
                         </div>

                         <img src="media/pressLogos.png" style={{width: '90%'}} alt="" />
                           


                    </div>
                </div>

            </div>
        </>
    );
}

export default Awords;