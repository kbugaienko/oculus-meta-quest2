'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
  element.addEventListener('click', opencontent);
});

function opencontent(evnt) {
  // found clicked element
  const tabTarget = evnt.currentTarget;

  // remember what is written in his attribute 'data-button'
  const button = tabTarget.dataset.button;

  // when clicking, we removed the corresponding classes from everyone with the designation "active"
  tabItem.forEach(function(item) {
    item.classList.remove('tabs__btn-item--active');
  });

  tabContent.forEach(function(item) {
    item.classList.remove('tabs__content-item--active');
  });

  // added the class "active" to the clicked element
  tabTarget.classList.add('tabs__btn-item--active');

  // find section by id and add a class with "active"
  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});
