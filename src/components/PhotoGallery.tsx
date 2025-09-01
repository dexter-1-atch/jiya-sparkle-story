import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import basketballAction from "@/assets/jiya-action.jpg";
import basketballCollection from "@/assets/basketball-collection.jpg";

const photos = [
  {
    id: 1,
    src: basketballAction,
    title: "Action Shot",
    description: "Jiya in her element - pure basketball energy! 🏀⚡"
  },
  {
    id: 2,
    src: basketballCollection,
    title: "Basketball Collection",
    description: "The magic of basketball - every ball tells a story ✨"
  },
  // We can add more photos here
];

const PhotoGallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openGallery = (photoId: number) => {
    setCurrentPhoto(photoId);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setTimeout(() => setCurrentPhoto(null), 300);
  };

  const nextPhoto = () => {
    if (currentPhoto !== null) {
      setCurrentPhoto((currentPhoto % photos.length) + 1);
    }
  };

  const prevPhoto = () => {
    if (currentPhoto !== null) {
      setCurrentPhoto(currentPhoto === 1 ? photos.length : currentPhoto - 1);
    }
  };

  const currentPhotoData = photos.find(p => p.id === currentPhoto);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Jiya's Gallery
            </h2>
            <span className="text-4xl animate-sparkle">📸</span>
          </div>
          <p className="text-lg text-muted-foreground">
            Capturing the amazing moments and basketball passion! 
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
              onClick={() => openGallery(photo.id)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-basketball bg-card">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{photo.title}</h3>
                    <p className="text-sm opacity-90">{photo.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Add More Photos Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group cursor-pointer"
          >
            <div className="h-64 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 flex items-center justify-center hover:bg-primary/10 transition-colors duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">📷</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">More Photos Coming!</p>
                  <p className="text-sm text-muted-foreground">Stay tuned for more amazing moments</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isOpen && currentPhotoData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeGallery}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentPhotoData.src}
                  alt={currentPhotoData.title}
                  className="w-full h-full object-contain rounded-lg"
                />
                
                {/* Close Button */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white border-0"
                  onClick={closeGallery}
                >
                  <X className="w-4 h-4" />
                </Button>

                {/* Navigation */}
                {photos.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
                      onClick={prevPhoto}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
                      onClick={nextPhoto}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}

                {/* Photo Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{currentPhotoData.title}</h3>
                  <p className="text-sm opacity-90">{currentPhotoData.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;