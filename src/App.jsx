export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-serif font-bold mb-4">Lingua Franca Nieruchomości</h1>
        <p className="text-lg max-w-2xl mx-auto">Professional real estate services for foreigners and locals in the heart of Silesia. Office located at ul. Gliwicka 19, Katowice.</p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 px-8 py-12 bg-gray-50">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Dla kupujących</h2>
          <p>Oferujemy szeroki wybór mieszkań, domów i lokali użytkowych na Śląsku. Zapewniamy wsparcie na każdym etapie zakupu.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Dla cudzoziemców</h2>
          <p>Pomagamy obcokrajowcom w zakupie nieruchomości w Polsce. Przeprowadzamy przez wszystkie formalności prawne i finansowe.</p>
        </div>
      </section>

      <section className="px-8 py-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Skontaktuj się z nami</h2>
        <div className="max-w-md mx-auto space-y-4">
          <p><strong>Adres:</strong> ul. Gliwicka 19, 40-079 Katowice</p>
          <p><strong>E-mail:</strong> biuro@linguafranca.pl</p>
          <p><strong>Telefon:</strong> +48 123 456 789</p>
        </div>
      </section>
    </main>
  );
}