import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { scheduleIdle } from "@solid-primitives/scheduled";

// TODO: use better alt names
const hats = [
    {
        name: "babushka",
        src: "/hats/babushka"
    },
    {
        name: "crown from flowers",
        src: "/hats/flower-crown"
    },
    {
        name: "pikachu hat",
        src: "/hats/pikachu"
    },
    {
        name: "space suit",
        src: "/hats/space-suit"
    },
    {
        name: "beret",
        src: "/hats/beret"
    },
    {
        name: "bucket hat",
        src: "/hats/bucket"
    },
    {
        name: "cap",
        src: "/hats/cap"
    },
    {
        name: "cat-woman mask",
        src: "/hats/cat-woman"
    },
    {
        name: "pink hat with a ribbon",
        src: "/hats/pink-hat"
    },
    {
        name: "beanie",
        src: "/hats/beanie"
    }
];

const checkAvifSupport = async (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onerror = () => resolve(false);
        image.onload = () => resolve(true);
        image.src =
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";

        setTimeout(() => resolve(false), 100);
    });
};

const HatProfilePicture = () => {
    const [currentIndex, setCurrentIndex] = createSignal(0);
    const [currentImageLoaded, setCurrentImageLoaded] = createSignal(false);
    const [supportsAvif, setSupportsAvif] = createSignal(false);

    const preloadNextImage = async () => {
        const nextIndex = (currentIndex() + 1) % hats.length;
        const nextImage = new Image();
        nextImage.src = supportsAvif() ? `${hats[nextIndex].src}.avif` : `${hats[nextIndex].src}.webp`;
    };

    const triggerNextImgPreload = scheduleIdle(preloadNextImage);

    const changeHat = () => {
        setCurrentImageLoaded(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hats.length);
    };

    createEffect(() => {
        if (currentImageLoaded()) {
            triggerNextImgPreload();
        }
    });

    onMount(async () => {
        const isAvifSupported = await checkAvifSupport();
        setSupportsAvif(isAvifSupported);
    });

    onCleanup(() => triggerNextImgPreload.clear());

    return (
        <div class="relative w-full md:fixed md:bottom-0 md:right-0 md:w-1/2 md:max-w-[660px]">
            <picture>
                <source srcset="/about-me-profile.avif" type="image/avif" />
                <img src={"/about-me-profile.webp"} alt="photo of me" width="660" height="700" loading="eager" />
            </picture>
            <button
                type="button"
                class="absolute bottom-[10%] left-0 right-0 z-10 mx-auto max-w-fit rounded-3xl border-2  border-ruby-red px-5 text-center text-2xl"
                onClick={changeHat}
            >
                Next hat
            </button>
            <picture>
                <source srcset={`${hats[currentIndex()].src}.avif`} type="image/avif" />
                <img
                    class="absolute inset-0"
                    width="660"
                    height="700"
                    src={`${hats[currentIndex()].src}.webp`}
                    alt={hats[currentIndex()].name}
                    loading="eager"
                    onLoad={() => setCurrentImageLoaded(true)}
                />
            </picture>
        </div>
    );
};

export default HatProfilePicture;
