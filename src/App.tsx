function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 text-center max-w-md">
        <h1 className="text-3xl font-bold text-sky-400 mb-4">
          Tailwind CSS fonctionne ! 🚀
        </h1>
        <p className="text-slate-300 mb-6">
          Si ce bloc est sombre, centré avec du texte bleu et des coins arrondis, ton setup est 100% prêt.
        </p>
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 shadow-md">
          C'est parti !
        </button>
      </div>
    </div>
  )
}

export default App