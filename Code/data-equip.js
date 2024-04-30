fetch('equip.xml')
 .then(response => response.text())
 .then(data => {
    displayData(data);
 })
 .catch(error => console.error('Error fetching XML:', error));
 function displayData(xmlString) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlString, "application/xml");

    // Extract data from the XML document
   let eq1 = xmlDoc.getElementsByTagName("equip1")[0];
   let name1 = eq1.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price1 = eq1.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('e1').textContent = name1;
   document.getElementById('e1txt').textContent = price1;
   //good2
   let eq2 = xmlDoc.getElementsByTagName("equip2")[0];
   let name2 = eq2.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price2 = eq2.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('e2').textContent = name2;
   document.getElementById('e2txt').textContent = price2;
   //good3
   let eq3 = xmlDoc.getElementsByTagName("equip3")[0];
   let name3 = eq3.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price3 = eq3.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('e3').textContent = name3;
   document.getElementById('e3txt').textContent = price3;
   //good4
   let eq4 = xmlDoc.getElementsByTagName("equip4")[0];
   let name4 = eq4.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price4 = eq4.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('e4').textContent = name4;
   document.getElementById('e4txt').textContent = price4;
   //good5
   let eq5 = xmlDoc.getElementsByTagName("equip5")[0];
   let name5 = eq5.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price5 = eq5.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('e5').textContent = name5;
   document.getElementById('e5txt').textContent = price5;
   //good6
   let eq6 = xmlDoc.getElementsByTagName("equip6")[0];
   let name6 = eq6.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price6 = eq6.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('e6').textContent = name6;
   document.getElementById('e6txt').textContent = price6;
 }