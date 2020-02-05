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
     document.querySelector(".navn").textContent = sideFooter.footer_navn;
     document.querySelector(".titel").textContent = sideFooter.footer_titel;

     document.querySelector(".face").src = sideFooter.footer_face_ikon.guid;
     document.querySelector(".insta").src = sideFooter.footer_insta_ikon.guid;

     document.querySelector(".linkedin").src = sideFooter.footer_linkedin_ikon.guid;

 }
