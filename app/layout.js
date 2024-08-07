import "./globals.css";

export const metadata = {
  title: "Anand Typing",
  description:
    "Type faster, type smarter with Anand Typing. Boost your typing skills through engaging lessons and challenges. Join us today and unleash your typing potential! Whether you're a beginner or looking to enhance your skills, Anand Typing is your key to typing excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {process.env.NODE_ENV==="production" &&(
           <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5827686928220119"
           crossorigin="anonymous"></script>
        )}
       
      </head>
      <body>{children}</body>
    </html>
  );
}
