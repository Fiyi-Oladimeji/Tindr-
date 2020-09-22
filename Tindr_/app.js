//
const data = [
    {
        name: 'John Doe',
        age: 27,
        gender: 'Male',
        lookingfor: 'female',
        location: 'Lagos NG',
        image: 'https://randomuser.me/api/portraits/men/27.jpg'
    },
    {
        name: 'Jane Doe',
        age: 28,
        gender: 'Female',
        lookingfor: 'male',
        location: 'Rome ITA',
        image: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    {
        name: 'Will Johnson',
        age: 33,
        gender: 'Male',
        lookingfor: 'female',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/men/33.jpg'
    },
]

const profiles = profileIterator(data);

//call first profile
nextProfile();

// next event 
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display
function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
            <ul class ="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
            </ul>
        `;

        document.getElementById('imageDisplay').innerHTML= `<img src="${currentProfile.image}">`;
    } else{
        // no more profiles
        window.location.reload();
    }
}

// profile iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return{
        next: function(){
            return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} :{done: true}
        }
    };
}