/* 
 Этот файл описывает главную страницу.
 Она показывает приветствие и короткие подсказки по работе с проектом.
 Человек читает советы и решает, что настроить или открыть следующим шагом.
*/
export default function Home() {
  return (
    <>
      {/* Этот блок выводит главный текст и подсказки для главной страницы. */}
      <main style={{ padding: 32, fontFamily: 'system-ui, -apple-system, Roboto, "Segoe UI", sans-serif' }}>
        <h1>Welcome — your new page is ready</h1>
        <p>All default CSS and extra assets were removed. Edit <code>src/app/page.tsx</code> to build your first page.</p>
        {/* Этот список даёт человеку быстрые шаги для старта. */}
        <ul>
          <li>Create a new CSS file later if you want styles.</li>
          <li>Keep the app minimal and add components under <code>src/components/</code>.</li>
        </ul>
      </main>
    </>
  );
}
