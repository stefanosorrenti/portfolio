import { motion } from "framer-motion";

export default function AppImgModal({ project, currentIndex, onClose, nextImg, prevImg }) {
    return (

        /* Backdrop */
        
        <motion.div className="fixed inset-0 z-70 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
        >

            {/* Content */}
            <motion.div className="relative max-h-[90vh] max-w-[90vw] overflow-auto rounded-lg border border-line bg-surface p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.04 }}
            >

                {/* Close button */}
                <button onClick={onClose} className="absolute top-2 right-2 text-ink rounded-full bg-surface/70  hover:text-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image */}
                <img src={project.images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="max-h-[80vh] max-w-[80vw] object-contain"/>
            </motion.div>
        </motion.div>
    );
}
