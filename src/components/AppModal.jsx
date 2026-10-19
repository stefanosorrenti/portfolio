export default function AppModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <h2>Modale</h2>
            <button onClick={onClose}>Chiudi</button>
        </div>
    )
}