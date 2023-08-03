function toggleVisibility(element) {
  // Проверяем, используется ли мобильное устройство
  var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

  if (!isMobile) {
    // Если не мобильное устройство, выходим из функции
    return;
  }

  // Находим .hover-div внутри элемента, на который нажали
  var hoverDiv = element.querySelector('.hover-info');

  // Если .hover-div уже видим, то скрываем его
  if (hoverDiv.classList.contains('visible')) {
    hoverDiv.classList.remove('visible');
  } else {
    // Иначе делаем его видимым
    hoverDiv.classList.add('visible');
  }
}