<template>
  <div class="bg-white dark:bg-gray-800">
    <NuxtLoadingIndicator />
    <header
      class="flex flex-wrap sticky top-4 border-gray-200 border-t-2 backdrop-blur-sm sm:justify-start sm:flex-nowrap w-full bg-white/50 text-sm py-4 dark:bg-gray-800/50 mb-32">
      <nav class="max-w-[60rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div class="flex items-center justify-between">
          <NuxtLink active-class="text-sky-400 dark:text-sky-400"
            class="underline underline-offset-8 flex-none text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
            to="/" alt="" title="">Daniel Hill</NuxtLink>
          <div class="sm:hidden">
            <button type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10"
              data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse"
              aria-label="Toggle navigation">
              <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div id="navbar-with-collapse"
          class="hidden transition-all duration-[0.1ms] overflow-hidden basis-full grow sm:block mt-5">
          <div>
            <ul class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <li
                class="flex-none text-gray-600 duration-500 inline-block relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0 sm:before:h-1 before:duration-500 before:bg-sky-400 hover:before:w-full before:rounded-full">
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/info/" alt="" title="">Info</NuxtLink>
              </li>
              <li
                class="flex-none text-gray-600 duration-500 inline-block relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0 sm:before:h-1 before:duration-500 before:bg-sky-400 hover:before:w-full before:rounded-full">
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/dienstleistung/" alt="" title="">Dienstleistung</NuxtLink>
              </li>
              <li
                class="flex-none text-gray-600 duration-500 inline-block relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0 sm:before:h-1 before:duration-500 before:bg-sky-400 hover:before:w-full before:rounded-full">
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/biographie/" alt="" title="">Biographie</NuxtLink>
              </li>
              <li
                class="flex-none text-gray-600 duration-500 inline-block relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0 sm:before:h-1 before:duration-500 before:bg-sky-400 hover:before:w-full before:rounded-full">
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/resuemee/" alt="" title="">Resümee</NuxtLink>
              </li>
              <li
                class="flex-none text-gray-600 duration-500 inline-block relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0 sm:before:h-1 before:duration-500 before:bg-sky-400 hover:before:w-full before:rounded-full">
                <NuxtLink active-class="text-sky-400 dark:text-sky-400"
                  class="text-lg text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 duration-500"
                  to="/tribute/" alt="" title="">Tribute</NuxtLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>

    <main>

      <NuxtPage />
    </main>
    <footer>

      <div class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto text-center">
        


        <div class="titles dark:bg-white bg-gray-200 p-10">
          <h2 style="--start-color:#007CF0;--end-color:#00DFD8">Beratung und Konzeption.</h2>
          <h2 style="--start-color:#7928CA;--end-color:#FF0080">Logo und UI/UX Design.</h2>
          <h2 style="--start-color:#FF4D4D;--end-color:#F9CB28">Software Entwicklung.</h2>
        </div>

        <div class="mt-3">
          <p class="text-gray-500">
            <NuxtLink class="font-semibold text-sky-400 hover:text-sky-500 duration-500" to="/privacy_policy/" alt=""
              title="">Impressum und
              Datenschutz</NuxtLink>
          </p>
          <p class="text-gray-500">Copyright © 2024 Daniel Hill - Alle Rechte vorbehalten</p>
        </div>
        <div class="mt-6">
          <input data-hs-theme-switch=""
          class="relative w-[3.25rem] h-7 mt-1 mr-1 bg-gray-100 checked:bg-none checked:bg-sky-400 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-slate-700 focus:ring-slate-700 focus:outline-none appearance-none before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto"
          type="checkbox" id="darkSwitch">
        </div>




      </div>

    </footer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Website von Daniel Hill - Gestaltung von Lösungen: Beratung, Logos, UI/UX, Softwareentwicklung.',
  ogTitle: 'Website von Daniel Hill - Gestaltung von Lösungen: Beratung, Logos, UI/UX, Softwareentwicklung.',
  description: 'Entdecken Sie die Welt der Designlösungen von Daniel Hill. Ich biete Beratung, Logogestaltung, UI/UX-Design und Softwareentwicklung, maßgeschneidert für Ihre Bedürfnisse. Besuchen Sie meine Seite, um zu sehen, wie ich Ihre Ideen in die Realität umsetzen kann.',
  ogDescription: 'Entdecken Sie die Welt der Designlösungen von Daniel Hill. Ich biete Beratung, Logogestaltung, UI/UX-Design und Softwareentwicklung, maßgeschneidert für Ihre Bedürfnisse. Besuchen Sie meine Seite, um zu sehen, wie ich Ihre Ideen in die Realität umsetzen kann.',
  ogUrl: 'danielhill1982.github.io',
  ogImage: 'https://repository-images.githubusercontent.com/806210325/885ba239-5bc0-465b-9cd6-e97eacf42ff5',
  twitterCard: 'summary',
  twitterTitle: 'Website von Daniel Hill - Gestaltung von Lösungen: Beratung, Logos, UI/UX, Softwareentwicklung.',
  twitterDescription: 'Entdecken Sie die Welt der Designlösungen von Daniel Hill. Ich biete Beratung, Logogestaltung, UI/UX-Design und Softwareentwicklung, maßgeschneidert für Ihre Bedürfnisse. Besuchen Sie meine Seite, um zu sehen, wie ich Ihre Ideen in die Realität umsetzen kann.'
}),


  useHead({
    htmlAttrs: {
      lang: 'de'
    },

    bodyAttrs: {
      class: 'antialiased bg-white dark:bg-gray-800'
    },

    title: 'Website von Daniel Hill - Gestaltung von Lösungen: Beratung, Logos, UI/UX, Softwareentwicklung.',

    meta: [
      { name: 'title', content: 'Website von Daniel Hill - Gestaltung von Lösungen: Beratung, Logos, UI/UX, Softwareentwicklung.' },
      { name: 'description', content: 'Entdecken Sie die Welt der Designlösungen von Daniel Hill. Ich biete Beratung, Logogestaltung, UI/UX-Design und Softwareentwicklung, maßgeschneidert für Ihre Bedürfnisse. Besuchen Sie meine Seite, um zu sehen, wie ich Ihre Ideen in die Realität umsetzen kann.' }
    ]
  })
</script>

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

body {
  font-family: Poppins, sans-serif;
}

:root {
  --ttf:
}

.titles {
  font-size: 2rem;
  line-height: 1.3;
  margin-bottom: 2rem;
}

.titles h2 {
  filter: brightness(0);
  animation: colorCycle 10s var(--ttf) infinite;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, var(--start-color), var(--end-color));
  background-color: gray;
}

.titles h2:nth-child(2) {
  animation-delay: 3.33s;
}

.titles h2:nth-child(3) {
  animation-delay: 6.66s;
}

@keyframes colorCycle {

  0%,
  55% {
    filter: brightness(0);
  }

  11%,
  33% {
    filter: none;
  }
}
</style>
