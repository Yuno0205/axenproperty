// import axios from "axios";
// import { NextResponse } from "next/server";
// import * as mammoth from "mammoth";

// export async function POST(req: Request) {
//   try {
//     const response = await fetch(docxUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch .docx file from: ${docxUrl}`);
//     }

//     // 2. Lấy nội dung dưới dạng ArrayBuffer
//     const arrayBuffer = await response.arrayBuffer();

//     // 3. Gọi mammoth.convertToHtml
//     const result = await mammoth.convertToHtml({
//       buffer: Buffer.from(arrayBuffer),
//     });
//     return result.value; // Chuỗi HTML
//   } catch (error) {
//     console.error("Error extracting text from PDF:", error);
//     return NextResponse.json(
//       { error: "Failed to extract text" },
//       { status: 500 }
//     );
//   }
// }
