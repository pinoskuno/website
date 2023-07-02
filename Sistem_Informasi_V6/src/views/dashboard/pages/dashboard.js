// import homeDashboardFunctions from "../../../scripts/utils/homeDashboardFunctions";

import dashboardHomescreenFunctions from "../../../scripts/utils/dashboardHomescreenFunctions";

const dashboardHome = {

    async render() {
      return `<section class="hero-section hero-section-full-height">
      <div class="container-fluid">
          <div class="row">

              <div class="col-lg-12 col-12 p-0">
                  <div id="hero-slide" class="carousel carousel-fade slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                          <div clazss="carousel-item active">
                              <img src="../assets/img/slide/slider_asean_web_v1.jpg" class="carousel-image img-fluid" alt="...">
                                
                              <div class="carousel-caption d-flex flex-column justify-content-end">
                                  <h2>SISTEM INFORMASI</h2>
                                    
                                  <p>DIVISI MRO PT IMSS</p>
                              </div>
                          </div>

                          <div class="carousel-item">
                              <img src="../assets/img/slide/background-kereta1.png" class="carousel-image img-fluid" alt="..."> 
                              
                              <div class="carousel-caption d-flex flex-column justify-content-end">
                                  <h2>LRT JABODETABEK</h2>
                                  
                                  <p>DIVISI MRO PT IMSS</p>
                              </div>
                          </div>
                      </div>

                      <button class="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                      </button>

                      <button class="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                      </button>
                  </div>
              </div>

          </div>
      </div>
  </section>

  <section class="bg-jargon bg-section" id="jargon">
        <div class="container-fluid text-center">
        </br>

            <div class="row jargon-round-3 slideanim" style="margin-top:65px;">
                <div class="col-sm-4 text-center round">
                    <div class="jargon-round b-party">
                        <span class="fa-4x fa-stack" style="color:#dc3545;">
                            <i class="fa fa-user fa-stack-1x"></i>
                            <i class="fa fa-circle-o fa-stack-2x"></i>
                        </span>
                    </div>
                    <h4 style="color:#dc3545;">Tanggap</h4>
                </div>
                <div class="col-sm-4 text-center round">
                    <div class="jargon-round wedding">
                        <span class="fa-4x fa-stack" style="color:#dc3545;">
                            <i class="fa fa-users fa-stack-1x"></i>
                            <i class="fa fa-circle-o fa-stack-2x"></i>
                        </span>
                    </div>    
                    <h4 style="color:#dc3545;">Tangkas</h4>
                </div>
                <div class="col-sm-4 text-center round">
                    <div class="jargon-round b-dinner">
                        <span class="fa-4x fa-stack" style="color:#dc3545;">
                            <i class="fa fa-thumbs-up fa-stack-1x"></i>
                            <i class="fa fa-circle-o fa-stack-2x"></i>
                        </span>
                    </div>
                    <h4 style="color:#dc3545;">Berkualitas</h4>
                </div>
            </div>
        </div>
        </br>
    </section>

  <section class="section-padding section-bg" id="section_2">
      <div class="container">
          <div class="row" id='daftarMenu'>

              <div class="col-lg-12 col-12 text-center mx-auto">
                  <h2 class="mb-5">MENU</h2>
              </div>

          </div>
      </div>
  </section>

  <section class="section-padding section-bg" id="section_2">
      <div class="container">
          <div class="row" id='daftarMenu2'>
          </div>
      </div>
  </section>

  <section class="section-padding section-bg" id="section_2">
      <div class="container">
          <div class="row" id='daftarMenu3'>
          </div>
      </div>
  </section>

  <section class="section-padding section-bg" id="section_2">
      <div class="container">
          <div class="row" id='daftarMenu4'>
          </div>
      </div>
  </section>

  <section class="section-padding section-bg" id="section_2">
      <div class="container">
          <div class="row" id='daftarMenu5'>
          </div>
      </div>
  </section>

<section class="cta-section section-padding section-bg" style="padding-bottom:100px;">
<div class="container">
  <div class="row justify-content-center align-items-center" id='daftarData'>

      <div class="col-lg-10 col-12 text-center mx-auto">
          <h2 class="mb-5">DATA LAINNYA</h2>
      </div>

  </div>
</div>
</section>`;
    },
  
    async afterRender() {
        console.log('kode jalan');

        const daftarMenuContainer = document.getElementById('daftarMenu');
        const fetchedMenu = await dashboardHomescreenFunctions.getAllMenu();
        fetchedMenu.forEach((data) => {
          daftarMenuContainer.innerHTML += `
          <div class="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4" >
          <div class="featured-block d-flex justify-content-center align-items-center">
                      <a href="${data.data().link}" target="_blank" class="d-block">
                          <img src="${data.data().gambar}" class="featured-block-image img-fluid" alt="" style="object-fit:cover;width:150px;height:150px;">

                          <p class="featured-block-text text-uppercase"><strong>${data.data().nama_menu}</strong></p>
                      </a>
          </div>
          </div>`
        })

        const daftarMenu2Container = document.getElementById('daftarMenu2');
        const fetchedMenu2 = await dashboardHomescreenFunctions.getAllMenu2();
        fetchedMenu2.forEach((data) => {
          daftarMenu2Container.innerHTML += `
          <div class="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4" >
          <div class="featured-block d-flex justify-content-center align-items-center">
                      <a href="${data.data().link}" target="_blank" class="d-block">
                          <img src="${data.data().gambar}" class="featured-block-image img-fluid" alt="" style="object-fit:cover;width:150px;height:150px;">

                          <p class="featured-block-text text-uppercase"><strong>${data.data().nama_menu2}</strong></p>
                      </a>
          </div>
          </div>`
        })

        const daftarMenu3Container = document.getElementById('daftarMenu3');
        const fetchedMenu3 = await dashboardHomescreenFunctions.getAllMenu3();
        fetchedMenu3.forEach((data) => {
          daftarMenu3Container.innerHTML += `
          <div class="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4" >
          <div class="featured-block d-flex justify-content-center align-items-center">
                      <a href="${data.data().link}" target="_blank" class="d-block">
                          <img src="${data.data().gambar}" class="featured-block-image img-fluid" alt="" style="object-fit:cover;width:150px;height:150px;">

                          <p class="featured-block-text text-uppercase"><strong>${data.data().nama_menu3}</strong></p>
                      </a>
          </div>
          </div>`
        })

        const daftarMenu4Container = document.getElementById('daftarMenu4');
        const fetchedMenu4 = await dashboardHomescreenFunctions.getAllMenu4();
        fetchedMenu4.forEach((data) => {
          daftarMenu4Container.innerHTML += `
          <div class="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4" >
          <div class="featured-block d-flex justify-content-center align-items-center">
                      <a href="${data.data().link}" target="_blank" class="d-block">
                          <img src="${data.data().gambar}" class="featured-block-image img-fluid" alt="" style="object-fit:cover;width:150px;height:150px;">

                          <p class="featured-block-text text-uppercase"><strong>${data.data().nama_menu4}</strong></p>
                      </a>
          </div>
          </div>`
        })

        const daftarMenu5Container = document.getElementById('daftarMenu5');
        const fetchedMenu5 = await dashboardHomescreenFunctions.getAllMenu5();
        fetchedMenu5.forEach((data) => {
          daftarMenu5Container.innerHTML += `
          <div class="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4" >
          <div class="featured-block d-flex justify-content-center align-items-center">
                      <a href="${data.data().link}" target="_blank" class="d-block">
                          <img src="${data.data().gambar}" class="featured-block-image img-fluid" alt="" style="object-fit:cover;width:150px;height:150px;">

                          <p class="featured-block-text text-uppercase"><strong>${data.data().nama_menu5}</strong></p>
                      </a>
          </div>
          </div>`
        })
      
        const daftarDataContainer = document.getElementById('daftarData');
        const fetchedData = await dashboardHomescreenFunctions.getAllData();
        fetchedData.forEach((doc) => {
          daftarDataContainer.innerHTML += `
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <a role="button" class="btn  custom-btn smoothscroll" style='width:100%; margin-top:20px;' href='${doc.data().link}' target='_blank'>${doc.data().nama_data}</button>
          </div>`;
        })
      
    },
  };
  
  export default dashboardHome;