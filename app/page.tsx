import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Приветствую!</h1>
      <p>
        <Link prefetch href="/hydration">
          Начнем с фото дня!
        </Link>
      </p>
    </div>
  );
}