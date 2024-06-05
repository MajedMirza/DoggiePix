let timer;
let deleteFirstPhotoDelay;

// Predefined breed information
const breedInfo = {
    affenpinscher: "Affenpinschers are toy dogs that have the facial appearance of monkeys.",
    african: "This breed of dog is native to Africa and is characterized by a muscular build; slim body and incredible energy.",
    airedale: "Airedales are large terriers with hearts as big as their personalities, they are intelligent, loyal and versatile.",
    akita: "Akitas are large, powerful dogs   with a noble and intimidating look.",
    appenzeller: "The Appenzellers are medium-sized herding dogs and these dogs are well-known for being energetic and having working abilities.",
    australian: "Australian Shepherds are logical and spirited dogs that are primarily used in herding.",
    basenji: "Basenjis are smooth coated, sleek dogs that share the peculiarity of giving a yodel like sound when they bark.",
    beagle: "Beagles are small hound dogs that are best known for their keen, trustworthy noses and hunting instinct.",
    bluetick: "Bluetick Coonhounds are great hunting dogs and they have unique blue ticked coloration.",
    borzoi: "Borzois are elegant, large dogs that have earned reputation for speed and good looks.",
    bouvier: "Bouviers are large, muscular working breed that are reported to be both versatile and sturdy.",
    boxer: "Boxers are medium sized dogs which are muscular in build and are known for being fun-loving and very active.",
    brabancon: "Brabancons are small dogs characterized with the combination of expressive faces and cheerful temperaments.",
    briard: "Briards are large herding dogs that are known for their fidelity and being guardians.",
    buhund: "Norwegian Buhunds are medium herding dogs that have abilities in agility work; they are friendly dogs.",
    bulldog: "Bulldogs are medium bodied muscular dogs which have trademark wrinkly faces and stunted muzzles.",
    bullterrier: "Bull Terriers are robust, cattle-headed canines characterized by antic behaviors.",
    cattledog: "Australian Cattle Dogs are existent breed of intelligent and energetic dogs that are mainly used for herding.",
    chihuahua: "Chihuahuas are small size dogs with a large attitude and are also very obedient to their masters.",
    chow: "Chows are medium-breed dogs, characterized by its lion-like mane as well as a blue-black colored tongue.",
    clumber: "Clumber Spaniels are big, friendly dogs commonly used for hunting and as family pets.",
    cockapoo: "Cockapoos are small and sociable dogs bred from Cocker Spaniel and Poodle interbreeding.",
    collie: "Collies are medium to large herding dogs, recognized for their intelligence and dedication.",
    coonhound: "The Coonhound is a large type of hound dog with great olfactory capability and hunting skills.",
    corgi: "Corgis are small herding dogs with short legs and a long body combined with a bright personality.",
    cotondetulear: "Coton de Tulears are small dogs, characterized by soft, wool-like fur and friendly character.",
    dachshund: "Dachshunds are a breed of small dogs characterised by their elongated bodies and short legs, and boast a courageous and prone-to-curiosity temperament.",
    dalmatian: "Dalmatians are dogs of moderate size that are recognized by black or liver colored spots all over their body.",
    dane: "Great Danes are very large dogs famous for an excellent character and breathtaking size.",
    deerhound: "Scottish Deerhounds are dogs of the hound group and are known to have wiry coated large dogs that are hunters by nature.",
    dhole: "Dholes are wild animals belonging to the canid family, specific to the Asian region and are known to live in packs, and have a unique method of communicating through whistles.",
    dingo: "According to the text, dingoes are wild canines from the continent of Australia and are highly mobile with a specific calling sound.",
    doberman: "Dobermans are midsize to large dogs that have smooth coats, are intelligent and protective.",
    elkhound: "Norwegian Elkhounds are described as hunting dogs of medium size and these are famous for their ability to hunt tirelessly.",
    entlebucher: "Entlebucher Mountain Dogs are herding dogs of average size but impressive sturdiness and commitment.",
    eskimo: "American Eskimo Dogs are social dogs that can be small to medium in size and are popular for their white furry coat.",
    finnish: "Finnish Spitz are medium size dogs, with fox-like appearance, which are excellent hunters.",
    frise: "Bichon Frises are small happy dogs originating from the Mediterranean with curly fur.",
    germanshepherd: "German Shepherds are a large breed of dogs, originating in Germany, considered intelligent and versatile working dogs.",
    greyhound: "Greyhounds are large sighthounds characterized by distinctive speed and elegant body structure.",
    groenendael: "Groenendaels are one of the Belgian Shepherd dogs and are known to be black in color and intelligent.",
    havanese: "Havanese is a breed of small, sturdy dogs that are characterized by their friendly playing disposition.",
    hound: "Hounds are a classification of hunting dog characterized by acute olfactory or visual ability.",
    husky: "Siberian Huskies are the medium-sized working dogs which have the thick coat and the blue or the heterochromatic eyes.",
    keeshond: "Keeshonds are dogs of moderate size with thick coat of hairs with glasses like marks around the eyes.",
    kelpie: "Australian Kelpie is a medium-sized herding breed that has a lot of energy and high intelligence.",
    komondor: "Komondors are large Hungarian flock guardian dogs characterized by their long, corded fur.",
    kuvasz: "Kuvaszok are large Hungarian guardian dogs that are well known for their loyalty and protective instincts of their owners.",
    labradoodle: "Labradoodles are hybrids of a Labrador Retriever and Poodle; it is a friendly and non-shedding breed of dog.",
    labrador: "Labrador Retrievers are classified as medium to large breed of dogs and are known to be friendly and sociable.",
    leonberg: "Leonbergers are large dogs that have friendly and docile temperaments.",
    lhasa: "Lhasa Apsos are small-sized dogs with long and silky hair, and they are very self-assured.",
    malamute: "Alaskan Malamutes are large bodied, muscular dogs that have great pulling ability.",
    malinois: "Belgian Malinois are medium-sized working dogs popular for their intelligence and all-roundedness.",
    maltese: "Maltese are small dogs and they have long, silky white fur and they are friendly dogs.",
    mastiff: "Mastiffs are giant breed of dog and their temperaments are both protective and tolerant.",
    mexicanhairless: "Mexican Hairless Dogs (Xoloitzcuintli) are characteristic by their lack of hair on their bodies and are fairly good-natured.",
    mountain: "Bernese Mountain Dogs are big, muscular dogs that have three main colors in their fur and are generally friendly.",
    newfoundland: "Newfoundlands are large, strong sturdy dogs and are known to be good natured and excellent swimmers.",
    otterhound: "Otterhounds are large scent hounds characterized by their shaggy coat and scientifically bred to hunt in water.",
    ovcharka: "Caucasian Ovcharka is one of the large breed of guard dogs characterized by thick fur.",
    papillon: "Papillons are small, active dogs that are noted for their unique floppy ears resembling a butterfly.",
    pekinese: "Pekingese are small dogs with a long coat and they are aloof with a sense of self importance.",
    pembroke: "Pembroke Welsh Corgis are small herding dogs which are characterized by short legs, elongated bodies and friendly temperament.",
    pinscher: "Miniature Pinschers are small, energetic animals with fearless and alert temperament.",
    pitbull: "Pitbulls are medium class dogs that are known to be powerful, devoted and friendly.",
    pointer: "Pointers are medium to large breed of dog that are famous for their hunting skills and body posture of pointing.",
    pomeranian: "Pomeranians refer to small, popular dogs characterized by their friendly and energetic behavior.",
    poodle: "Poodles are available in different sizes or classifications and are considered intelligent dogs with a hypoallergenic hair.",
    pug: "Pugs are small dogs characterized by their wrinkled skin, curled tails, and friendly personalities.",
    puggle: "Puggles are hybrids of Pugs and Beagles which proves to be playful and friendly.",
    pyrenees: "Great Pyrenees are large guardian dogs known for their protective instincts and white fluffy fur.",
    redbone: "Redbone Coonhounds are medium to large hounds characterized by their red coat and abilities in hunting.",
    retriever: "Golden Retrievers are medium to large dogs which are friendly and enjoy meeting new people.",
    ridgeback: "Rhodesian Ridgebacks are big boned, muscular canines characterized by the crest of hair that runs along their spine.",
    rottweiler: "A Rottweiler is a breed of large and strong dogs that have a reputation of being very loyal and protective.",
    saluki: "Salukis are medium-sized dogs with a slim and muscular build that has been bred for speed and agility.",
    samoyed: "Samoyeds are medium to large breed known for their white fluffy coat and cheerful expression.",
    schipperke: "Schipperkes are small black dogs with a fox like resemblance and a very active breed of dog.",
    schnauzer: "There are standard, miniature, and tiny schnauzers, and they possess a beard only on their faces and have an alert demeanor.",
    segugio: "Segugios are Italian scent hound that hunt in packs the medium-sized breed was designed for endurance hunting; they meet the ASFA standard.",
    setter: "They are dogs of medium to large size that were bred specifically for hunting with a lot of concentration and they do have feathering on their bodies.",
    sharpei: "Shar Peis are medium breed dogs, and they have a wrinkled skin and a dark blue-black mouth.",
    sheepdog: "Old English Sheepdogspopular herding breed and large, shaggy coated dog of pleasant disposition.",
    shiba: "Shiba Inus are small dog breeds with a foxlike look and spirited temperament.",
    shihtzu: "Shih Tzus are small breed of stockings characterized by their beautiful, silky coat and friendly temperament.",
    spaniel: "They are medium size breeds which are known for hunting and also friendly natured.",
    spitz: "Spitz dogs are a breed of dogs that feature major characteristics such as thick fur, pointed ears and curled tail.",
    springer: "It has been established that English Springer Spaniels are average sized dogs that were bred especially for hunting and that the dogs are friendly.",
    stbernard: "Saint Bernards are giant dog breed mostly involved in rescue operations and are very friendly",
    terrier: "Terriers can be described as a breed of dogs with aggressive behavior and excessive energy.",
    tervuren: "Tervurens are one of the moderately small herding dogs originating from Belgium and are highly intelligent dogs that can do a lot of things.",
    vizsla: "Vizslas are a medium sized sporting/hunting breed which has a smooth coated, glossy coat and are typically very friendly.",
    waterdog: "Portuguese Water Dogs are bred as medium-breed water dogs with curly hair and great swimming skills.",
    weimaraner: "Weimaraners belong to the large sleigh breed developed for hunting and they have a distinct gray fur.",
    whippet: "These are descent of sighthounds and they are medium-sized dogs that can easily run fast while possessing a graceful body.",
    wolfhound: "Being among the biggest sighthounds, the Irish Wolfhounds are known for their strength and affectionate temperament."
};


async function start() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        createBreedList(data.message);
    } catch (e) {
        console.log("There was a problem fetching the breed list.");
    }
}

start();

function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList)
            .map(function (breed) {
                return `<option>${breed}</option>`;
            })
            .join("")}
    </select>
    `;
}

async function loadByBreed(breed) {
    if (breed != "Choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await response.json();
        createSlideshow(data.message);
        displayBreedInfo(breed);
    }
}

function createSlideshow(images) {
    let currentPosition = 0;
    clearInterval(timer);
    clearTimeout(deleteFirstPhotoDelay);

    if (images.length > 1) {
        document.getElementById("slideshow").innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide" style="background-image: url('${images[1]}')"></div>
        `;
        currentPosition += 2;
        if (images.length == 2) currentPosition = 0;
        timer = setInterval(nextSlide, 3000);
    } else {
        document.getElementById("slideshow").innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide"></div>
        `;
    }

    function nextSlide() {
        document
            .getElementById("slideshow")
            .insertAdjacentHTML(
                "beforeend",
                `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`
            );
        deleteFirstPhotoDelay = setTimeout(function () {
            document.querySelector(".slide").remove();
        }, 1000);
        if (currentPosition + 1 >= images.length) {
            currentPosition = 0;
        } else {
            currentPosition++;
        }
    }
}

function displayBreedInfo(breed) {
    const info = breedInfo[breed.toLowerCase()] || "No information available for this breed.";
    document.getElementById("breed-info").innerText = info;
}

// Info popup functionality
document.getElementById("info-button").addEventListener("click", () => {
    document.getElementById("info-popup").style.display = "block";
});

document.getElementById("close-button").addEventListener("click", () => {
    document.getElementById("info-popup").style.display = "none";
});

window.addEventListener("click", (event) => {
    const popup = document.getElementById("info-popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
