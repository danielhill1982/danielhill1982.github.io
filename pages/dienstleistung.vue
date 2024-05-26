<template>
    <div>
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">

            <div class="max-w-2xl text-left mx-auto">
                <div class="titles">
                    <h1 style="--start-color:#007CF0;--end-color:#00DFD8">Beratung und Konzeption.</h1>
                    <h1 style="--start-color:#7928CA;--end-color:#FF0080">Logo und UI/UX Design.</h1>
                    <h1 style="--start-color:#FF4D4D;--end-color:#F9CB28">Software Entwicklung.</h1>
                </div>
                <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Ich biete ein umfassendes Spektrum an
                    Design-Dienstleistungen an, um Ihre Vision zum Leben zu erwecken.</p>
                <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Von der ersten Beratung und Konzeptentwicklung
                    über die Erstellung von Logos und UI/UX-Design bis hin zur Softwareentwicklung decke ich alle
                    Aspekte Ihres Projekts ab.</p>
                <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Mein Ziel ist es, innovative Lösungen zu
                    liefern, die Ihren Anforderungen gerecht werden und Ihre Erwartungen übertreffen.</p>


            </div>
        </div>
    </div>
</template>


<style>
:root {
    --text: #000;
    --ttf: cubic-bezier(0.4, 0, 0.2, 1);
    --color: var(--text);
}

.titles {
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    margin-bottom: 2rem;
    text-align: center;
}

.titles h1 {
    filter: brightness(0);
    animation: colorCycle 10s var(--ttf) infinite;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(90deg, var(--start-color), var(--end-color));
}

.titles h1:nth-child(2) {
    animation-delay: 3.33s;
}

.titles h1:nth-child(3) {
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
