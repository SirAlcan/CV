

$( document ).ready(function() {
  let index = 0;
  create_programming_section();
  create_cloud_section();
  create_ai_section();
  create_security_section();
  create_General_section();
  certificates.forEach(function(element) {
    console.log(certificate_root_folder+element);
    $('#udemy_container').append('<div class="col-md-6 col-lg-4 col-xs-12" data-toggle="modal" data-target="#'+certificates[index]+'"><div class="services-item wow fadeInRight" data-wow-delay="'+"0."+index+"s"+'"><img style="width:100%; height:100%;"src="img/'+certificate_root_folder+element+png_ext+'" alt="Certificate Nmap"><div class="services-content"><h3><a href="#">'+certificates_name[index]+'</a></h3></div></div></div>');
    $('#multy_modal_container').append(create_modal(certificates[index] + pdf_ext, certificates[index]));
    index++;
  });
});

function create_ai_section(){
    $('#udemy_container').append('<div class="w-100"><div class="subheading mb-3">Artificial Inteligence</div><hr class="m-0"><div class="col-md-6 col-lg-4 col-xs-12" data-toggle="modal" data-target="#'+certificates[0]+'"><div class="services-item wow fadeInRight" data-wow-delay="'+"0.1s"+'"><img style="width:100%; height:100%;"src="img/skills/industry/cv.png" alt="Certificate Nmap"><div class="services-content"></div></div></div></div>');
}

function create_programming_section(){
  $('#udemy_container').append('<div class="w-100"><div class="subheading mb-3">Software</div><hr class="m-0"><div class="col-md-6 col-lg-4 col-xs-12" data-toggle="modal" data-target="#'+certificates[0]+'"><div class="services-item wow fadeInRight" data-wow-delay="'+"0.1s"+'"><img style="width:100%; height:100%;"src="img/skills/industry/cv.png" alt="Certificate Nmap"><div class="services-content"></div></div></div></div>');
}

function create_cloud_section(){
  $('#udemy_container').append('<div class="w-100"><div class="subheading mb-3">Cloud</div><hr class="m-0"><div class="col-md-6 col-lg-4 col-xs-12" data-toggle="modal" data-target="#'+certificates[0]+'"><div class="services-item wow fadeInRight" data-wow-delay="'+"0.1s"+'"><img style="width:100%; height:100%;"src="img/skills/industry/cv.png" alt="Certificate Nmap"><div class="services-content"></div></div></div></div>');
}

function create_security_section(){
  $('#udemy_container').append('<div class="w-100"><div class="subheading mb-3">Security</div><hr class="m-0"><div class="col-md-6 col-lg-4 col-xs-12" data-toggle="modal" data-target="#'+certificates[0]+'"><div class="services-item wow fadeInRight" data-wow-delay="'+"0.1s"+'"><img style="width:100%; height:100%;"src="img/skills/industry/cv.png" alt="Certificate Nmap"><div class="services-content"></div></div></div></div>');
}
function create_General_section(){
  $('#udemy_container').append('<div class="w-100"><div class="subheading mb-3">General</div><hr class="m-0"><div class="col-md-6 col-lg-4 col-xs-12" data-toggle="modal" data-target="#'+certificates[0]+'"><div class="services-item wow fadeInRight" data-wow-delay="'+"0.1s"+'"><img style="width:100%; height:100%;"src="img/skills/industry/cv.png" alt="Certificate Nmap"><div class="services-content"></div></div></div></div>');
}

var certificate_root_folder = "certificates/";
var root_directories = ["software","cloud","ai","security","general"];
var pdf_ext = ".pdf";
var png_ext = ".png";
var certificates = ["UC-1HSWAUZE","UC-5LYIGBDY","UC-7D5LVETD","UC-7IMMWK6Y","UC-9Y6OOHV2","UC-65VDHVQB","UC-CZTAAP2I","UC-JJCE710O","UC-MRQPYBZO","UC-VIX60M0D","UC-WEWKWXAH"];
var id_list = ["UC-1HSWAUZE","UC-5LYIGBDY","UC-7D5LVETD","UC-7IMMWK6Y","UC-9Y6OOHV2","UC-65VDHVQB","UC-CZTAAP2I","UC-JJCE710O","UC-MRQPYBZO","UC-VIX60M0D","UC-WEWKWXAH"];
var certificates_name = [
  "Nmap: Network Security Scanning Basics & Advanced Techniques",
  "Hands-On Artificial Newral Networks",
  "Search Algorithms in Artificial Intelligence",
  "How to become a Solution Engineer",
  "Java Unit Testing with Spring Boot & Mockito",
  "Startup Growth Strategies",
  "CCNA Cyber Ops, Kaly Linux Hacking Tools",
  "Java Memory Managment",
  "OPC Software",
  "SQL Bootcamp",
  "Network Hacking"
];

function create_modal(source, modal_id){
    let modal =
    '<div class="modal fade" id="'+modal_id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
      '<div class="modal-dialog modal-lg" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-body mb-0 p-0">'+
            '<div class="embed-responsive embed-responsive-16by9 z-depth-1-half">'+
                '<object data="./certificates/'+source+'" type="application/pdf" width="100%" height="800px">'+
                  '<p>It appears you do not have a PDF plugin for this browser.'+
                   'No worries... you can <a href="resume.pdf">click here to'+
                   'download the PDF file.</a></p>'+
                '</object>'+
                '</div>'+
                '</div>'+
  '         <div class="modal-footer justify-content-center flex-column flex-md-row">'+
            '<input type="image"data-dismiss="modal"  src="./img/x.png"  width="30" height="30">'+
          '</div>'+
        '</div>'+
      '</div>'+
  '  </div>';
  return modal;
}
