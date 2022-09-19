import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

import { authOptions } from "../pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function Home({ posts }) {
  return (
    <div className="h-screen br-gray-100 overflow-hidden">
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Facebook Clone Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await unstable_getServerSession(req, res, authOptions);

  const posts = await getDocs(
    query(collection(db, "posts"), orderBy("timestamp", "desc"))
  );

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
