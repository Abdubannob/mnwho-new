let aboutservice = document.querySelector(".about-service")
let aboutme = document.querySelector(".about-me")
let aboutphotos = document.querySelector(".about-photos")
let aboutvideos = document.querySelector(".about-videos")
let articlascard = document.querySelector(".articlas-card")
let equipment = document.querySelector(".about-equipment")
let services = document.querySelector(".about-services")
let social = document.querySelector(".social-item")

let PhotoPea = document.getElementById("photo-pea")
let PhotoAva = document.getElementById("photo-ava")
let Art = document.getElementById("art")
let NoArt = document.getElementById("no-art")

let worktab = document.getElementById("work-tab")
let allorderstab = document.getElementById("all-orders-tab")
let photostab = document.getElementById("photos-tab")
let videostab = document.getElementById("videos-tab")
let articalstab = document.getElementById("articals-tab")
let socialtab = document.getElementById("social-tab")
let equiptab = document.getElementById("equip-tab")
let servicestab = document.getElementById("services-tab")


PhotoPea.style.display ="none"
aboutservice.style.display = "none"
aboutphotos.style.display = "none"
aboutvideos.style.display = "none"
articlascard.style.display = "none"
equipment.style.display = "none"
services.style.display = "none"
social.style.display ="none"
Art.style.display="none"

worktab.onclick = function () {
aboutservice.style.display = "inline-block"
aboutme.style.display ="none"
aboutvideos.style.display = "none"
aboutphotos.style.display ="none"
equipment.style.display = "none"
services.style.display = "none"
social.style.display="none"
PhotoPea.style.display = "none"
PhotoAva.style.display ="inline-block"
}

allorderstab.onclick = function () {
aboutservice.style.display = "none"
aboutme.style.display ="flex"
aboutvideos.style.display = "none"
aboutphotos.style.display ="none"
articlascard.style.display ="none"
equipment.style.display = "none"
services.style.display = "none"
social.style.display="none"
PhotoPea.style.display = "none"
PhotoAva.style.display ="inline-block"
NoArt.style.display = "flex"
Art.style.display ="none"
}

photostab.onclick = function (){
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutvideos.style.display = "none"
    aboutphotos.style.display ="grid"
    articlascard.style.display ="none"
    equipment.style.display = "none"
    services.style.display = "none"
    social.style.display="none"
    PhotoPea.style.display = "inline-block"
    PhotoAva.style.display ="none"
    NoArt.style.display = "none"
    Art.style.display ="flex"
}

articalstab.onclick = function (){
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutvideos.style.display = "none"
    aboutphotos.style.display ="none"
    articlascard.style.display ="grid"
    equipment.style.display = "none"
    services.style.display = "none"
    social.style.display="none"
    PhotoPea.style.display = "inline-block"
    PhotoAva.style.display ="none"
    NoArt.style.display = "none"
    Art.style.display ="flex"
}

videostab.onclick = function (){
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutphotos.style.display ="none"
    aboutvideos.style.display = "grid"
    articlascard.style.display ="none"
    equipment.style.display = "none"
    services.style.display = "none"
    social.style.display="none"
    PhotoPea.style.display = "inline-block"
    PhotoAva.style.display ="none"
    NoArt.style.display = "none"
    Art.style.display ="flex"
}

equiptab.onclick = function (){
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutvideos.style.display = "none"
    aboutphotos.style.display ="none"
    articlascard.style.display ="none"
    services.style.display = "none"
    equipment.style.display = "flex"
    social.style.display="none"
    PhotoPea.style.display = "inline-block"
    PhotoAva.style.display ="none"
    NoArt.style.display = "none"
    Art.style.display ="flex"
}

servicestab.onclick = function (){
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutvideos.style.display = "none"
    aboutphotos.style.display ="none"
    articlascard.style.display ="none"
    equipment.style.display = "none"
    services.style.display = "flex"
    social.style.display="none"
    PhotoPea.style.display = "inline-block"
    PhotoAva.style.display ="none"
    NoArt.style.display = "none"
    Art.style.display ="flex"
}

socialtab.onclick = function () {
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutvideos.style.display = "none"
    aboutphotos.style.display ="none"
    equipment.style.display = "none"
    articlascard.style.display ="none"
    services.style.display = "none"
    social.style.display="flex"
    PhotoPea.style.display = "inline-block"
    PhotoAva.style.display ="none"
    NoArt.style.display = "none"
    Art.style.display ="flex"
    }