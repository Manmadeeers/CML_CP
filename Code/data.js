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
   }
   