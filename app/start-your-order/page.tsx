import Link from "next/link";

export default function StartYourOrderPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium underline underline-offset-4"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold tracking-tight">
          Start Your Order
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Tell us what you want and we’ll help you bring your style to life.
        </p>

        <div className="mt-10 rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Ready to get started?</h2>

          <p className="mt-3 text-muted-foreground">
            Send us your requirements, preferred style, fabric choice, or
            reference image through WhatsApp.
          </p>

          <a
            href="https://wa.me/2348120876268?text=Hello%20FEMS-STITCHES%2C%20I%20would%20like%20to%20start%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-black px-6 py-3 font-medium text-white transition-opacity hover:opacity-80"
          >
            Start Order on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}