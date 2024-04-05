import Link from "next/link"

export default function Home() {
  return (
    <main className="hero min-h-screen bg-white/90 text-slate-800">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-7xl font-bold  text-blue-600">GPTGenius</h1>
          <p className="text-lg leading-loose py-6">
            GPTGenius: Your AI language companion. Powered by OpenAI, it
            enhances your conversations, content creation, and more!
          </p>
          <Link href={"/chat"} className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
