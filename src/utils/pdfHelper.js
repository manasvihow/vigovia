import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Footer from "../components/Footer";
import React from "react";
import { createRoot } from "react-dom/client";

export async function pdfExport(element){
    // 🔻 STEP 1: Temporarily remove all oklch color styles
    const allElements = element.querySelectorAll('*');

    allElements.forEach((el) => {
      const computedStyle = window.getComputedStyle(el);
      const inlineStyle = el.style;
  
      // Loop over all computed style properties
      for (let i = 0; i < computedStyle.length; i++) {
        const propName = computedStyle[i];
        const propValue = computedStyle.getPropertyValue(propName);
  
        if (propValue.includes('oklch')) {
          // Remove oklch by overriding with a fallback
          if (propName === 'color') {
            inlineStyle.color = '#000'; // default text color
          } else if (propName === 'background-color') {
            inlineStyle.backgroundColor = '#fff'; // default background color
          } else if (propName === 'background-image') {
            inlineStyle.backgroundImage = 'none';
          } else {
            // fallback: remove oklch from any other property
            inlineStyle.setProperty(propName, 'initial');
          }
        }
      }
    });
  
    // 🔻 STEP 2: Render to canvas
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true
    });
  
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    let imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

    if(imgHeight > pdf.internal.pageSize.getHeight()) {
      const pageHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, (imgProps.height * pdfWidth) / imgProps.width);
      
      let position = 0;
      position -= pageHeight;

      while(imgHeight > pageHeight) {
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, (imgProps.height * pdfWidth) / imgProps.width);
        position -= pageHeight;
        imgHeight -= pageHeight;
      }

    } else {
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }
  
    pdf.save(`itinerary-${Date.now()}.pdf`);
}