// import homeDashboardFunctions from "../../../scripts/utils/homeDashboardFunctions";

// import dashboardHomescreenFunctions from "../../../scripts/utils/dashboardHomescreenFunctions";

const aboutHome = {

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

    <!-- ======= About Us Section ======= -->
    <section class="section-padding section-bg" id="section_2">
        <div class="container">
            <div class="row">
                
                <div class="col-lg-12 col-12 text-center mx-auto">
                    <h2 class="mb-5">Maintenance, Repair, dan Overhaul (MRO)</h2>
                </div>

                <div class="col-lg-6 col-12 mb-5 mb-lg-0">
                    <img src="../assets/img/mro-gear-v1.png" class="custom-text-box-image img-fluid" alt="">
                </div>

                <div class="col-lg-6 col-12">
                    <div class="custom-text-box">

                        <h5 class="mb-3">Tugas Pokok dan Fungsi Divisi MRO</h5></br>

                        <ul class="custom-list mt-2">
                            <li class="custom-list-item d-flex" style="font-size: 20px;">
                                <i class="bi-check custom-text-box-icon me-2"></i>
                                Merencanakan, mengelola dan mengawasi pelaksanaan kegiatan pemeliharaan, perbaikan dan perawatan gedung untuk memastikan bahwa seluruh gedung INKA Group dalam Kondisi terawatt dan memenuhi standar yang telah ditetapkan
                            </li>

                            <li class="custom-list-item d-flex" style="font-size: 20px;">
                                <i class="bi-check custom-text-box-icon me-2"></i>
                                Mengendalikan kinerja mesin-mesin produksi dengan mengaplikasikan strategi perawatan mencakup Corective, Preventive dan improvement mesin produksi diseluruh INKA Group
                            </li>

                            <li class="custom-list-item d-flex" style="font-size: 20px;">
                                <i class="bi-check custom-text-box-icon me-2"></i>
                                Merencanakan mengelola dan mengawasi pelaksanaan kegiatan pemeliharaan, perbaikan dan perwatan fasilitas pabrik yang meliputi proses perawatan dan perbaikan power plant (power plant energy based, instalasi listrik, instalasi udara tekan dan kompresor, instalasi gas), fasilitas angkat angkut, bangunan beserta system drainase dan fasilitas pendukung pabrik untuk memastikan bahwa seluruh fasilitas yang dimiliki INKA Group dalam Kondisi terawatt dan memenuhi standar yang telah ditetapkan
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section><!-- End About Us Section -->

    <!-- ======= Contact Form ======= -->
    <div class="col-lg-12 col-6">
        <form class="custom-form contact-form" action="#" method="post" role="form">
            <center>
            <h2 style="margin-bottom:40px;">Contact form</h2>
            </center>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <input type="text" name="first-name" id="first-name" class="form-control" placeholder="First Name" required>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                    <input type="text" name="last-name" id="last-name" class="form-control" placeholder="Last Name" required>
                </div>
            </div>

            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email" required>

            <textarea name="message" rows="5" class="form-control" id="message" placeholder="Description"></textarea>

            <button type="submit" class="form-control">Send Message</button>
        </form>
    </div>
    <!-- End Section -->

    <!-- ======= Maps ======= -->
    <div class="map-section" style="margin-top:20px; margin-left:20px; margin-right:20px; margin-bottom:20px;">
      <iframe style="border:0; width: 100%; height: 500px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.15481805756!2d111.51104589400026!3d-7.625064670263893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf015ea242bb%3A0xa2f7a9e70e95cddf!2sPT%20INKA%20(Persero)!5e0!3m2!1sid!2sid!4v1685374032411!5m2!1sid!2sid" frameborder="0" allowfullscreen></iframe>
    </div>
    <!-- End Section -->
 
</section>`;
    },

    async afterRender() {
        document.querySelector("#navbarLightDropdownMenuLink").classList.add("active");
      },
  };
  
  export default aboutHome;