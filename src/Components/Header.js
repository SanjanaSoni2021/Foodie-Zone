function Header(){
    return(
        <div>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="images/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
      Foodie Zone
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#burger">Burger</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#offer">Offers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#about">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#contact">contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Header;