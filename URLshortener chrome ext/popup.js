let generateBtn = document.querySelector("#shortURL");
let api = document.querySelector("#myurl");


let toastError =document.querySelector('.toast-error');
let toastSuccess = document.querySelector('.toast-success');

const url = new URL( "https://t.ly/api/v1/link/shorten");

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

generateBtn.addEventListener('click', ()=> 
{
  if(api.value)  {

chrome.storage.local.get(['API'],function (result) {
  
  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      "long_url": api.value,
    "domain": "https://t.ly//",
    "api_token": result.API
  })

}).then(response => response.json())
  .then(json => {
    toastSuccess.classList.remove('d-hide');
    toastSuccess.textContent= json.short_url;
});

});

const params = {
    "api_token": "{YOUR_API_TOKEN}",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));



  }else {
toastError.classList.remove('d-hide');
  setTimeout(()=>{
      toastError.classList.add('d-hide');
      
    },1500)
  }
}
)