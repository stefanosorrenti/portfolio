//IMPORTS
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { useState } from 'react';

export default function AppSettings({ onClose }) {

    //DATA
    const brandColor = getComputedStyle(document.documentElement).getPropertyValue('--color-brand');

    //USE STATE

    const [color, setColor] = useState(brandColor);


    //FUNCTIONS
    function handleSave() {
        document.documentElement.style.setProperty('--color-brand', color);

        onClose()
    }

    return (

        /* Backdrop */

        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/75 md:items-center md:p-6 lg:p-10">

            {/* Modal content */}

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="settings-modal-title"
                aria-describedby="settings-modal-description"
                className="relative flex max-h-[95dvh] w-full max-w-sm flex-col overflow-hidden rounded-t-2xl border border-line bg-surface text-ink shadow-2xl md:rounded-2xl md:max-w-md lg:max-w-lg"
            >
                {/* Header */}
                <div className="flex shrink-0 items-center gap-3 border-b border-line p-4 md:px-6 lg:px-8 lg:py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <div>
                        <h3 id="settings-modal-title" className="text-lg font-semibold">Settings</h3>
                        <p id="settings-modal-description" className="text-xs leading-5 text-muted">Personalizza la tua esperienza</p>
                    </div>
                </div>

                {/* Scrollable settings */}

                <div className="overflow-y-auto overscroll-contain px-4 md:px-6 lg:px-8">

                    {/* Language selector */}

                    <section className="border-b border-line py-4 lg:py-5">

                        <label htmlFor="language" className="text-sm font-semibold">Lingua</label>
                        <p id="language-description" className="mt-1 text-xs leading-5 text-muted">Scegli la lingua del sito.</p>


                        <select id="language" defaultValue="it" aria-describedby="language-description" className="min-h-10 mt-2 w-full appearance-none rounded-md border border-line bg-surface py-2 pr-10 pl-10 text-sm text-ink">
                            <option value="it">Italiano</option>
                        </select>

                    </section>

                    {/* Dark mode toggle */}
                    <section className="flex items-center border-b border-line py-4 lg:py-5">
                        <div className="basis-11/12">
                            <h4 id="dark-mode-label" className="text-sm font-semibold">Dark mode</h4>
                            <p id="dark-mode-description" className="mt-1 text-xs leading-5 text-muted">Attiva la modalità scura</p>
                        </div>
                        
                        <div className="flex items-center">
                            <label htmlFor="dark-mode"></label>
                            <input type="checkbox" id="dark-mode" className="size-5 lg:size-6 accent-brand" />
                        </div>
                    </section>

                    {/* Color picker */}
                    <section className="py-4 lg:py-5">
                        <h4 className="text-sm font-semibold">Colore principale</h4> 
                        <p className="mt-1 text-xs leading-5 text-muted">Personalizza il colore principale del sito. Il nuovo colore verrà applicato a tutti gli elementi principali.</p>
                        <div className="mt-4 flex flex-col gap-4 rounded-xl border border-line bg-surface p-4 md:gap-5 md:p-5 lg:flex-row lg:items-center">
                            <HexColorPicker color={color} onChange={setColor} className="max-h-52! w-full! gap-3!" />
                            <HexColorInput prefixed color={color} onChange={setColor} className="min-h-11 w-full rounded-lg border border-line bg-surface px-3 py-2 text-center font-mono text-base tracking-wider focus-visible:border-brand d lg:w-28 lg:shrink-0" />
                        </div>

                    </section>

                </div>

                {/* Buttons */}
                <div className="mx-4 flex shrink-0 justify-end gap-3 border-t border-line py-4 md:mx-6 lg:mx-8 lg:py-5">
                    <button type="button" className="inline-flex min-h-10 items-center justify-center rounded-md border border-faint bg-surface px-4 py-2 text-sm font-semibold text-ink" onClick={onClose}>Annulla</button>
                    <button type="button" className="inline-flex min-h-10 items-center justify-center rounded-md border border-brand bg-brand px-4 py-2 text-sm font-semibold text-white" onClick={handleSave}>Salva</button>
                </div>
            </div>

        </div>
    );
}
