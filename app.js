const LoadData=()=>{
    fetch("http://localhost:8000/service/")
    .then(res=>res.json())
    .then(data=>DisplayServices(data))
}

const DisplayServices = Services =>{
    // console.log(Services);
    const parent = document.getElementById('parent')
    Services.forEach(service => {
        // console.log(service);
        const child = document.createElement('div')
        child.classList.add('max-w-sm','rounded','overflow-hidden','shadow-lg');
        child.innerHTML=`<img class="w-full" src='${service.image}'alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${service.name}</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">  <a href="details.html?id=${service.id}"> Details</a></span>
      </div>`
      parent?.appendChild(child);
    });
}

LoadData();

const urlParams = new URLSearchParams(window.location.search);

const id =urlParams.get('id');

const LoadDetails=()=>{
    const urls = `http://localhost:8000/service/${id}/`
    fetch(urls)
    .then(res=>res.json())
    .then(data=>DisplayServicesDetails(data))
}

const DisplayServicesDetails = service=>{
    console.log(service);
    const parent = document.getElementById('details')
    
      const child = document.createElement('div')
        child.classList.add('max-w-2xl','rounded','overflow-hidden','shadow-lg');
        child.innerHTML=`<img class="w-full" src='${service.image}'alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${service.name}</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">  <a href="details.html?id=${service.id}"> Details</a></span>
      </div>`
      parent?.appendChild(child);
    
}

LoadDetails();