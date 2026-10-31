# Stilis Home — clonă frontend (Next.js)

Proiect local bazat pe datele publice ale [stilis.md](https://stilis.md/).

## Pornire

```bash
npm install
npm run dev
```

Deschide http://localhost:3000

## Re-scrape catalog (opțional)

```bash
node scripts/scrape-catalog.mjs
```

Scrie `src/data/scraped/products.json` (~2966 produse) și `categories.json`.

## Ce este inclus

- Logo SVG original, slide-uri Revolution Slider (14 imagini full-bleed)
- Iconițe SVG originale (beneficii, meniu catalog)
- **2966 produse** + **66 categorii** din WooCommerce Store API
- Header / footer / căutare / coș / filtre / pagini info
- Responsive desktop + mobil

## Limitări față de original (nu e 1:1 absolut)

1. **Slider Revolution** — animațiile/layer-ele JS nu sunt replicate; slide-urile sunt imaginile complete.
2. **Layout Woodmart/Elementor** — CSS-ul temei WordPress nu e copiat integral; spațierile pot diferi cu câțiva px.
3. **Descrieri HTML produs** — vin din API; atributele variabile pot fi incomplete față de pagina WP.
4. **Checkout real / plăți / iute** — nu sunt conectate la backend WooCommerce.
5. **Pagini info** — conținut rezumat, nu HTML-ul Elementor complet.
6. **Imagini** — încărcate de pe CDN stilis.md (necesită internet).
