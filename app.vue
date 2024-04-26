<template>
  <div class="bg-white dark:bg-gray-800">
  <header class="flex flex-wrap sticky top-0 backdrop-blur-sm sm:justify-start sm:flex-nowrap w-full bg-white/50 text-sm py-4 dark:bg-gray-800/50 border-b-2 border-gray-400">
  <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <div class="flex items-center justify-between">
      <NuxtLink class="flex-none text-xl font-semibold dark:text-white" to="/">Daniel Hill</NuxtLink>
      <div class="sm:hidden">
        <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10" data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
          <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="navbar-with-collapse" class="hidden transition-all duration-[0.1ms] overflow-hidden basis-full grow sm:block mt-5">
      <div>
        <ul class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <li><NuxtLink active-class="text-sky-400 dark:text-sky-400" class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" to="/info">Info</NuxtLink></li>
          <li><NuxtLink active-class="text-sky-400 dark:text-sky-400" class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" to="/biographie">Biographie</NuxtLink></li>
          <li><NuxtLink active-class="text-sky-400 dark:text-sky-400" class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" to="/tribute">Tribute</NuxtLink></li>
          <li><NuxtLink active-class="text-sky-400 dark:text-sky-400" class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" to="/tagebuch">Tagebuch</NuxtLink></li>
          <li><input data-hs-theme-switch="" class="relative w-[3.25rem] h-7 mt-1 mr-1 bg-gray-100 checked:bg-none checked:bg-sky-400 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-slate-700 focus:ring-slate-700 focus:outline-none appearance-none before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto" type="checkbox" id="darkSwitch"></li>
        </ul>
      </div>
      
    </div>
  </nav>
</header>
<main>
  <NuxtLoadingIndicator />
  <NuxtPage />
</main>
<footer class="border-t-2 border-gray-400">
  <!-- ========== FOOTER ========== -->
<footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
  <!-- Grid -->
  <div class="text-center">
    
    <!-- End Col -->

    <div class="mt-3">
      <p class="text-gray-500"><NuxtLink class="font-semibold text-sky-400 hover:text-sky-500 duration-500" to="/legal">Impressum und Datenschutz</NuxtLink></p>
      <p class="text-gray-500">© 2024 | Daniel Hill | Alle Rechte vorbehalten</p>
    </div>

    
  </div>
  <!-- End Grid -->
</footer>
<!-- ========== END FOOTER ========== -->
</footer>
</div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
