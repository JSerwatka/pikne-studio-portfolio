import profilePicture from "../assets/about-me-profile.png?url";
// import spaceSuit from "../assets/hats/space-suit.png";
// import babushka from "../assets/hats/babushka.png";
// import beanie from "../assets/hats/beanie.png";
// import beret from "../assets/hats/beret.png";
// import bucket from "../assets/hats/bucket.png";
// import cap from "../assets/hats/cap.png";
// import catWoman from "../assets/hats/cat-woman.png";
// import floweCrown from "../assets/hats/flowe-crown.png";
// import pikachu from "../assets/hats/pikachu.png";
// import pinkHat from "../assets/hats/pink-hat.png";
import { createSignal } from "solid-js";

// const hats = [
//     {
//         name: "space suit",
//         src: spaceSuit
//     },
//     {
//         name: "babushka",
//         src: babushka
//     },
//     {
//         name: "beanie",
//         src: beanie
//     },
//     {
//         name: "beret",
//         src: beret
//     },
//     {
//         name: "bucket hat",
//         src: bucket
//     },
//     {
//         name: "cap",
//         src: cap
//     },
//     {
//         name: "cat-woman mask",
//         src: catWoman
//     },
//     {
//         name: "crown from flowers",
//         src: floweCrown
//     },
//     {
//         name: "pikachu hat",
//         src: pikachu
//     },
//     {
//         name: "pink hat with a ribbon",
//         src: pinkHat
//     }
// ];

const HatProfilePicture = () => {
    const [currentIndex, setCurrentIndex] = createSignal(0);
    // const changeHat = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % hats.length);
    // };
    // console.log(hats[currentIndex()].src.src)

    return (
        <div class="relative">
    <img
        src={"/about-me-profile.png"}
        // alt="profile picture of me"
        // width="660"
        // height="700"
        // loading="eager"
    />
    {/* <button onClick={changeHat}>arrow</button> */}
    {/* <img class="absolute left-0"  src={hats[currentIndex()].src.src} alt={hats[currentIndex()].name} /> */}
</div>
    );
}
 
export default HatProfilePicture;