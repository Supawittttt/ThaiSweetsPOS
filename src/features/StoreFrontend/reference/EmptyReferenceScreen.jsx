import { ScreenSwitcher } from '../../../components/ScreenSwitcher';

export function EmptyReferenceScreen({ screenNumber }) {
  return (
    <main className="empty-reference-screen">
      <ScreenSwitcher />
      <section>
        <h1>Screen {screenNumber}</h1>
        <p>The referenced HTML file is empty, so this route is intentionally represented as a blank reference component.</p>
      </section>
    </main>
  );
}
