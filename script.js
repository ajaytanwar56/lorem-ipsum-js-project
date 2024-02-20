const text = [
        "A vibrant kaleidoscope rested on the dusty shelf, its intricate patterns and colors concealed within the confines of a cylindrical tube. Captivating anyone who dared to peer through its glass eye.",
        
        "Tucked away in a forgotten drawer, a worn-out compass lay dormant, its needle patiently waiting for the call of adventure. Eager to point the way toward uncharted territories.",
        
        "An antique typewriter, adorned with tarnished keys and a faded ribbon, stood proudly as a relic of a bygone era. Preserving the echoes of the written word in a digital age.",
        
        "Nestled among forgotten trinkets on a cluttered desk, a miniature Zen garden exuded tranquility. Inviting moments of mindfulness in the midst of chaos.",
        
        "A vintage record player, adorned with scratches and dust, held the power to resurrect melodies from another time. Its needle delicately danced along the grooves, conjuring the nostalgic tunes of yesteryears into the present.",
        
        "A whimsical hourglass, its glass bulbs encased in an ornate metal frame, marked the passage of time with silent elegance. Each grain of sand, a fleeting moment captured in the translucent chambers, reminded onlookers of the transient nature of existence.",
        
        "A weathered treasure chest, adorned with brass embellishments, guarded secrets untold. Its creaking hinges beckoned explorers to unlock the mysteries within, promising glimpses into the forgotten realms of imagination.",
        
        "A well-loved teddy bear, missing an eye and sporting patches of threadbare fur, sat patiently on a weathered rocking chair. Despite the signs of wear, it radiated a timeless warmth, silently witnessing the passage of childhood dreams.",
        
        "An intricately carved puzzle box, its wooden panels adorned with enigmatic symbols, challenged those daring enough to unravel its secrets. With each twist and turn, it guarded the hidden compartment that held the promise of revelation.",
        
        "A constellation globe, its celestial patterns meticulously mapped across a glass sphere, served as a cosmic guide. With a gentle spin, it transported stargazers into the vastness of the night sky, connecting them to the celestial wonders beyond."

];



const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const loremText = document.querySelector(".lorem-text")

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

    if(isNaN(value) || value <=0 || value > 9){
        loremText.innerHTML = `<p class="result">${text[random]}</p>`
    }

    else{
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item){
            return `<p class="result">${item}</p>`
        })
        .join("");
        loremText.innerHTML = tempText;
    }

});

