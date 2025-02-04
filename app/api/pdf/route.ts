import { NextResponse } from "next/server";
import PDFParser from "pdf2json";

export async function GET() {
  try {
    const url =
      "https://assets.ctfassets.net/nu40wp00r0zn/50ytGpc8tuKbyVayBhfOhS/be00cd093b6c584902bf95d3dd775efd/-AXEN_Property-_-_JD_Business_Development_Intern.pdf";

    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    return new Promise((resolve, reject) => {
      const pdfParser = new PDFParser();
      pdfParser.parseBuffer(Buffer.from(buffer));

      pdfParser.on("pdfParser_dataReady", (pdfData: any) => {
        let extractedText = "";
        pdfData.Pages.forEach((page: any) => {
          page.Texts.forEach((text: any) => {
            extractedText += decodeURIComponent(text.R[0].T) + " ";
          });
          extractedText += "\n\n";
        });

        resolve(NextResponse.json({ text: extractedText }));
      });

      pdfParser.on("pdfParser_dataError", (errData: any) => {
        reject(NextResponse.json({ error: errData.parserError, status: 500 }));
      });
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
