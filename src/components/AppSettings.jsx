
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { useState } from 'react';

export default function AppSettings({ onClose, onOpen }) {

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

            <div className="relative flex max-h-[95dvh] w-full max-w-md flex-col overflow-hidden rounded-t-2xl border border-line bg-surface shadow-2xl md:max-w-3xl md:rounded-2xl lg:max-w-6xl">

                {/* Settings menu section */}

                <section>

                    {/* Header */}
                    <div>

                        <h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            Settings
                        </h3>
                        <p>Personalizza la tua esperienza</p>

                    </div>


                    {/* Language selector */}
                    <div>
                        <label htmlFor="language">Language</label>
                        <select id="language">
                            <option value="en">English</option>
                            <option value="it">Italian</option>
                        </select>
                    </div>


                    {/* Dark mode toggle */}
                    <div>
                        <label htmlFor="dark-mode">Dark mode</label>
                        <input type="checkbox" id="dark-mode" />
                    </div>


                    {/* Color picker */}
                    <div>
                        <h3>Scegli il colore</h3>
                        <p>Seleziona un colore per personalizzare l'interfaccia</p>
                        <HexColorPicker color={color} onChange={setColor} />
                        <HexColorInput color={color} onChange={setColor} />
                    </div>

                    {/* Buttons */}
                    <div>
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={handleSave}>Save</button>
                    </div>
                </section>

            </div>

        </div>
    )
}