import './style.css';

function App() {
  return (
    <section>
      <div class="akaza-wrapper">
        <img src="/akaza.jpeg" alt="Akaza" class="bg-img" />

        <div class="text-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>


          <h1>INFINITY CASTLE</h1>
          <small>Release Date: December 17, 2027</small>
          <p>
            Demon Slayer: Kimetsu no Yaiba - The Movie: Infinity Castle is a
            2025 Japanese animated dark fantasy action film by Ufotable and the
            first installment of a planned trilogy adapting the final story arc
            of the manga Demon Slayer: Kimetsu no Yaiba.
          </p>
        </div>
      </div>


      <div class="aot-wrapper">
        <img src="/AOT.jpeg" alt="Attack on Titan" class="aot-img" />

        <div className="text-overlay-aot">
          <h1>ATTACK ON TITAN</h1>
          <small>Release Date:  April 7, 2013</small>
          <p>
            Attack on Titan is a Japanese dark fantasy anime television series
            adapted from the manga by Hajime Isayama, following humanity's
            struggle against giant man-eating titans.
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;