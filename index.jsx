export default function Widget() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 p-4">
          <div className="w-full max-w-4xl p-6 bg-white dark:bg-zinc-800 shadow-lg rounded-lg">
            <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6 text-center">HTML Compiler Mirror</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="input-html" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Input HTML</label>
                <textarea id="input-html" className="block w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-zinc-700 dark:text-zinc-300" rows="10"></textarea>
              </div>
              <div>
                <label htmlFor="output-html" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Output HTML</label>
                <div id="output-html" className="block w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-300" style="min-height: 10rem;"></div>
              </div>
            </div>
            <button id="compile-button" className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition duration-300 ease-in-out">Compile</button>
          </div>
        </div>
        <script>
          document.getElementById('compile-button').addEventListener('click', () => {
            const inputHtml = document.getElementById('input-html').value;
            document.getElementById('output-html').innerHTML = inputHtml;
          });
        </script>
    )
}