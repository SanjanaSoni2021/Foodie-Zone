import Formm from "./Formm";
import AboutUS from "./AboutUs";
import Header from "./Header";
function BurgerCmp(){
    return(
        <>
      <div id="container-background">
              <Header/>
                <div className="main-content">
                    <div className="content">
                        <h1>BEST DEAL</h1>
                        <h2>BURGER</h2>
                        <div id="btn1">
                        <button> <a href="#contact"/>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="best-card">
                    <div className="row" style={{ marginTop: "100px" }}>
                        <div className="col-md-4 py-3 py-md-0">
                            <div className="card">
                                <img className="card-image-top" src="images/card1.png" alt="" />
                                <div className="card-img-overlay">
                                    <h1 className="card-title1"> Fresh Burger</h1>
                                    <p className="card-text">Lorem ispsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-3 py-md-0">
                            <div className="card">
                                <img className="card-image-top" src="images/card2.jpg" alt="" />
                                <div className="card-img-overlay">
                                    <h1 className="card-title1"> Fresh Burger</h1>
                                    <p className="card-text">Lorem ispsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-3 py-md-0">
                            <div className="card">
                                <img className="card-image-top" src="images/card3.png" alt="" height="275px" />
                                <div className="card-img-overlay">
                                    <h1 className="card-title1"> Fast Delivery</h1>
                                    <p className="card-text">Lorem ispsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* New card */}
            <div className="container" id="offer">
                <div className="card-content">
                    <div className="row">
                        <div className="col-md-6 py-3 py-md-0">
                            <h1>SUPER DEAL</h1>
                            <h1>BURGER</h1>
                            <h3>50% OFF</h3>
                            <h5>$100,50</h5>
                            <p>Lorem ispsum dolor sit amet consectecture adipisicing elit. Deleniti, voluptatibus! Voluptatem eligendi aolorem totam repella
                            voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                            Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                            Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                            </p>

                        </div>
                        <div className="col-md-6 py-3 py-md-0">
                            <div className="card">
                                <img className="card-image-top" src="images/side-background.png" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="banner">
                    <h1>Best <span className="change-content"></span></h1>
                    <h2>50% OFF</h2>
                    <div id="btn2"><button>Order Now</button></div>
                </div>
            </div>

            <div className="container" id="burger">
            <h1 className="text-center" style={{ fontWeight: "bold", marginTop: "50px" }}>our Special Burger</h1>
                <div className="new-card">
                    <div className="row">
                        <div className="col-md-4 py-md-0">
                            <div className="card">
                                <img className="card-image-top" src="images/chicken burger.png" alt="" />
                                <div className="card-body">
                                    <h2 className="card-titel text-center">aloo tikki Burger</h2>
                                    <h3 className="card-titel text-center">$30,20</h3>
                                    <p className="card-text text-center">Lorem ispsum dolor sit, amet consectecture adipisicing elit. Cum, console.error?;</p>
                                    <div id="btn3">
                                        <button>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-md-0">
                            <div className="card">
                                <img className="card-image-top" src="images/beef burger.png" alt="" />
                                <div className="card-body">
                                    <h2 className="card-titel text-center">Chesse Burger</h2>
                                    <h3 className="card-titel text-center">$30,20</h3>
                                    <p className="card-text text-center">Lorem ispsum dolor sit, amet consectecture adipisicing elit. Cum, console.error?;</p>
                                    <div id="btn3">
                                        <button>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-md-0">
                            <div className="card">
                                <img className="card-image-top" src="images/beef burger2.png" alt="" />
                                <div className="card-body">
                                    <h2 className="card-titel text-center">Beef Burger</h2>
                                    <h3 className="card-titel text-center">$30,20</h3>
                                    <p className="card-text text-center">Lorem ispsum dolor sit, amet consectecture adipisicing elit. Cum, console.error?;</p>
                                    <div id="btn3">
                                        <button>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: "50px" }}>
                        <div className="col-md-4 py-md-0">
                            <div className="card">
                                <img className="card-image-top" src="images/cheese burger.jpg" alt="" />
                                <div className="card-body">
                                    <h2 className="card-titel text-center">Chesse Burger</h2>
                                    <h3 className="card-titel text-center">$30,20</h3>
                                    <p className="card-text text-center">Lorem ispsum dolor sit, amet consectecture adipisicing elit. Cum, console.error?;</p>
                                    <div id="btn3">
                                        <button>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-md-0">
                            <div className="card">
                                <img className="card-image-top" src="images/sandwich.png" alt="" />
                                <div className="card-body">
                                    <h2 className="card-titel text-center">Best Sandwich</h2>
                                    <h3 className="card-titel text-center">$30,20</h3>
                                    <p className="card-text text-center">Lorem ispsum dolor sit, amet consectecture adipisicing elit. Cum, console.error?;</p>
                                    <div id="btn3">
                                        <button>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-md-0">
                            <div className="card">
                                <img className="card-image-top" src="images/fries.png" alt="" />
                                <div className="card-body">
                                    <h2 className="card-titel text-center">Best Fries</h2>
                                    <h3 className="card-titel text-center">$30,20</h3>
                                    <p className="card-text text-center">Lorem ispsum dolor sit, amet consectecture adipisicing elit. Cum, console.error?;</p>
                                    <div id="btn3">
                                        <button>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div id="btn4"><button>View More</button></div>
            </div>


            <div className="banner2">
                <h1>FAST & FREE</h1>
                <h2>DELIVERY</h2>
            </div>

           <AboutUS/>

            <Formm/>
           
        </>
    )
}
export default BurgerCmp;