<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/" replace>
      
      <span>&nbsp;Data Form</span></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target=".navbar-collapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">          
        </ul>
        <ul class="nav navbar-nav navbar-right">          
          <li class="nav-item">
            <router-link class="btn btn-dark" 
            data-toggle="collapse" 
            data-target=".navbar-collapse" 
            to="/freeform" replace>Free Format</router-link>
          </li> 
          <li class="nav-item">
            <router-link class="btn btn-dark" 
            data-toggle="collapse" 
            data-target=".navbar-collapse" 
            to="/predef" replace>Controlled Format</router-link>
          </li> 
        </ul>
      </div>
    </nav>

    <main role="main">
      <section class="jumbotron" style="background-color: white;">
        <div class="row">
          <div class="container">
            <router-view />
          </div>
        </div>
      </section>
    </main>

    <div class="container">
      <footer>
        <div class="row">
          <span>&nbsp;</span>
        </div>
      </footer>
    </div>
</div>  
</template>