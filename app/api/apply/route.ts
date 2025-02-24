import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const position = formData.get("position") as string;
    const phone = formData.get("phone") as string;
    const achievements = formData.get("achievements") as string;
    const cv = formData.get("cv") as File | null;

    console.log("📩 Received form data:", {
      name,
      email,
      phone,
      achievements,
      cv,
    });

    if (!name || !email || !position || !phone || !achievements || !cv) {
      console.log("⚠️ Lỗi: Thiếu thông tin ứng tuyển!");
      return NextResponse.json(
        { message: "Thiếu thông tin ứng tuyển!" },
        { status: 400 }
      );
    }

    // Đọc file CV dưới dạng Buffer
    const cvBuffer = Buffer.from(await cv.arrayBuffer());

    console.log("📄 File CV nhận được:", cv.name, cv.type, cv.size, "bytes");

    // Tạo transport gửi email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Gửi email kèm file CV
    await transporter.sendMail({
      from: ` <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "Ứng viên mới",
      text: `Fullname: ${name}\nEmail: ${email}\nPosition: ${position}\nPhone number: ${phone}\nAbout: ${achievements}`,
      attachments: [
        {
          filename: cv.name,
          content: cvBuffer,
          contentType: cv.type,
        },
      ],
    });

    console.log("✅ Email gửi thành công!");
    return NextResponse.json(
      { message: "Ứng tuyển thành công!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Lỗi khi gửi email:", error);
    return NextResponse.json({ message: "Lỗi server!" }, { status: 500 });
  }
}
