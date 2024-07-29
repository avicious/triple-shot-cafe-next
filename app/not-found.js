import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <p>
        Sorry, we couldn't find what you were looking for, try going back home.
      </p>
      <Link href="/">Go back Home</Link>
    </div>
  );
}
