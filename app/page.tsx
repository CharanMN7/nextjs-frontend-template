import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto text-center h-screen flex flex-col justify-center">
      <h1 className="text-3xl font-bold">Charan&apos;s Next 14 template</h1>
      <p>
        This is a Next 14 template created by Charan (
        <Link href="https://charan.dev/" target="_blank">
          https://charan.dev/
        </Link>
        )
      </p>
    </div>
  );
}
