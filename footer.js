 let footer;
 const urlVisit = "https://madsiversenn.dk/kea/02-semester/tema10/eksamensprojekt/wordpress-5.3/wordpress/wp-json/wp/v2/footer/158"

 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJsonFooter();
     getFooter();

 }

 async function getFooter() {
     const responseFooter = await fetch(url);
     const includeFooter = await responseFooter.text();
 }

 async function getJsonFooter() {
     let data = await fetch(urlVisit);
     sideFooter = await data.json();
     showFooter();
 }

 function showFooter() {
     document.querySelector(".footer_overskrift").textContent = sideFooter.footer_overskrift;
     document.querySelector(".tlf_tekst").textContent = sideFooter.footer_tekst_tlf;
     document.querySelector(".map_tekst").textContent = sideFooter.footer_tekst_adress;
     document.querySelector(".email_tekst").textContent = sideFooter.footer_tekst_email;
     document.querySelector(".email").src = sideFooter.footer_mail_ikon.guid;
     document.querySelector(".tlf").src = sideFooter.footer_tlf_ikon.guid;
     document.querySelector(".map").src = sideFooter.footer_map_ikon.guid;
     document.querySelector(".face").src = sideFooter.footer_face_ikon.guid;
     document.querySelector(".insta").src = sideFooter.footer_insta_ikon.guid;

     document.querySelector(".linkedin").textContent = sideFooter.footer_linkedin_ikon;

 }
