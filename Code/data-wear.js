fetch('data.xml')
 .then(response => response.text())
 .then(data => {
    displayData(data);
 })
 .catch(error => console.error('Error fetching XML:', error));

 function displayData(xmlString) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlString, "application/xml");
   
    // Extract data from the XML document
    let good1 = xmlDoc.getElementsByTagName("good1")[0];
    let name1 = good1.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price1 = good1.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
    document.getElementById('g1').textContent = name1;
    document.getElementById('g1txt').textContent = price1;
    //good 2
    let good2 = xmlDoc.getElementsByTagName("good2")[0];
    let name2 = good2.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price2 = good2.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    document.getElementById('g2').textContent = name2;
    document.getElementById('g2txt').textContent = price2;
    //good3
    let good3 = xmlDoc.getElementsByTagName("good3")[0];
    let name3 = good3.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price3 = good3.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g3').textContent = name3;
    document.getElementById('g3txt').textContent = price3;
    //good4
    let good4 = xmlDoc.getElementsByTagName("good4")[0];
    let name4 = good4.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price4 = good4.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g4').textContent = name4;
    document.getElementById('g4txt').textContent = price4;
    //good5
    let good5 = xmlDoc.getElementsByTagName("good5")[0];
    let name5 = good5.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price5 = good5.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g5').textContent = name5;
    document.getElementById('g5txt').textContent = price5;
    //good6
    let good6 = xmlDoc.getElementsByTagName("good6")[0];
    let name6 = good6.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price6 = good6.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g6').textContent = name6;
    document.getElementById('g6txt').textContent = price6;
    //good7
    let good7 = xmlDoc.getElementsByTagName("good7")[0];
    let name7 = good7.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price7 = good7.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g7').textContent = name7;
    document.getElementById('g7txt').textContent = price7;
    //good8
    let good8 = xmlDoc.getElementsByTagName("good8")[0];
    let name8 = good8.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price8 = good8.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g8').textContent = name8;
    document.getElementById('g8txt').textContent = price8;
    //good9
    let good9 = xmlDoc.getElementsByTagName("good9")[0];
    let name9 = good9.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price9 = good9.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g9').textContent = name9;
    document.getElementById('g9txt').textContent = price9;
    //good10
    let good10 = xmlDoc.getElementsByTagName("good10")[0];
    let name10 = good10.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price10 = good10.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g10').textContent = name10;
    document.getElementById('g10txt').textContent = price10;
    //good11
    let good11 = xmlDoc.getElementsByTagName("good11")[0];
    let name11 = good11.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price11 = good11.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g11').textContent = name11;
    document.getElementById('g11txt').textContent = price11;
    //good12
    let good12 = xmlDoc.getElementsByTagName("good12")[0];
    let name12 = good12.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price12 = good12.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g12').textContent = name12;
    document.getElementById('g12txt').textContent = price12;
    //good 13
    let good13 = xmlDoc.getElementsByTagName("good13")[0];
    let name13 = good13.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price13 = good13.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g13').textContent = name13;
    document.getElementById('g13txt').textContent = price13;
    //good14
    let good14 = xmlDoc.getElementsByTagName("good14")[0];
    let name14 = good14.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price14 = good14.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g14').textContent = name14;
    document.getElementById('g14txt').textContent = price14;
    //good15
    let good15 = xmlDoc.getElementsByTagName("good15")[0];
    let name15 = good15.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let price15 = good15.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    //to html
    document.getElementById('g15').textContent = name15;
    document.getElementById('g15txt').textContent = price15;
   }
   