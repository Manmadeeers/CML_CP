fetch('shoe.xml')
 .then(response => response.text())
 .then(data => {
    displayData(data);
 })
 .catch(error => console.error('Error fetching XML:', error));

 function displayData(xmlString) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlString, "application/xml");

    // Extract data from the XML document
   let shoe1 = xmlDoc.getElementsByTagName("shoe1")[0];
   let name1 = shoe1.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price1 = shoe1.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('s1').textContent = name1;
   document.getElementById('s1txt').textContent = price1;
   //good2
   let shoe2 = xmlDoc.getElementsByTagName("shoe2")[0];
   let name2 = shoe2.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price2 = shoe2.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('s2').textContent = name2;
   document.getElementById('s2txt').textContent = price2;
   //good3
   let shoe3 = xmlDoc.getElementsByTagName("shoe3")[0];
   let name3 = shoe3.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price3 = shoe3.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('s3').textContent = name3;
   document.getElementById('s3txt').textContent = price3;
   //good4
   let shoe4 = xmlDoc.getElementsByTagName("shoe4")[0];
   let name4 = shoe4.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price4 = shoe4.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('s4').textContent = name4;
   document.getElementById('s4txt').textContent = price4;
   //good5
   let shoe5 = xmlDoc.getElementsByTagName("shoe5")[0];
   let name5 = shoe5.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price5 = shoe5.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('s5').textContent = name5;
   document.getElementById('s5txt').textContent = price5;
   //good6
   let shoe6 = xmlDoc.getElementsByTagName("shoe6")[0];
   let name6 = shoe6.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price6 = shoe6.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('s6').textContent = name6;
   document.getElementById('s6txt').textContent = price6;
   //good7
   let shoe7 = xmlDoc.getElementsByTagName("shoe7")[0];
   let name7 = shoe7.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price7 = shoe7.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('s7').textContent = name7;
   document.getElementById('s7txt').textContent = price7;
   //good8
   let shoe8 = xmlDoc.getElementsByTagName("shoe8")[0];
   let name8 = shoe8.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price8 = shoe8.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('s8').textContent = name8;
   document.getElementById('s8txt').textContent = price8;
   //good9
   let shoe9 = xmlDoc.getElementsByTagName("shoe9")[0];
   let name9 = shoe9.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let price9 = shoe9.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('s9').textContent = name9;
   document.getElementById('s9txt').textContent = price9;
 }