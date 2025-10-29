export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Emuliportal Basic</h1>
      <p className="mt-4">Willkommen! Diese Startseite ist live.</p>
      <ul className="mt-6 list-disc pl-6">
        <li><a className="underline" href="/api/health">API Health</a></li>
        <li><a className="underline" href="/legal/impressum">Impressum</a></li>
        <li><a className="underline" href="/legal/datenschutz">Datenschutz</a></li>
      </ul>
    </main>
  );
}
