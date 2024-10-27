const loading = document.querySelector('#loading');

//無名関数
// window.addEventListener('load', () => {
//    loading.classList.add('loaded');
// });

const deleteSpinner = () => {
   loading.classList.add('loaded');
};

window.addEventListener('load', deleteSpinner);