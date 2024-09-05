import Footer from "@/componants/footer/footer";
import Header from "@/componants/header/header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - My Website</title>
        <meta
          name="description"
          content="Welcome to my website, your one-stop solution for all things web."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <h1>Welcome</h1>
      <Footer />
    </div>
  );
}
