// // app/api/submit-form/route.js
// export async function POST(request) {
//   try {
//     console.log("Received form submission request");
//
//     const body = await request.json();
//     const { name, email, company, phone, message, recaptchaToken } = body;
//
//     console.log("Form Data:", { name, email, company, phone, message });
//     console.log("Recaptcha Token Received:", recaptchaToken);
//
//     if (!recaptchaToken) {
//       console.log("No captcha token provided.");
//       return new Response(
//         JSON.stringify({ message: "No captcha token provided" }),
//         { status: 400 }
//       );
//     }
//
//     // Verify the reCAPTCHA token with Google
//     const secretKey = process.env.RECAPTCHA_SECRET_KEY;
//     const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
//     const captchaResponse = await fetch(verificationURL, { method: "POST" });
//     const captchaData = await captchaResponse.json();
//
//     console.log("Captcha Verification Response:", captchaData);
//
//     if (!captchaData.success) {
//       console.log("Captcha verification failed.");
//       return new Response(
//         JSON.stringify({ message: "Captcha verification failed" }),
//         { status: 400 }
//       );
//     }
//
//     console.log("Captcha verified successfully.");
//     return new Response(
//       JSON.stringify({ message: "Captcha verified successfully" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error during form submission:", error);
//     return new Response(JSON.stringify({ message: "Internal Server Error" }), {
//       status: 500,
//     });
//   }
// }
