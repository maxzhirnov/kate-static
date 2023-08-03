function toggleVisibility(element, event) {
  // Предотвратить всплытие события
  event.stopPropagation();

  // Проверяем, используется ли мобильное устройство
  var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

  if (!isMobile) {
    // Если не мобильное устройство, выходим из функции
    return;
  }

  // Находим .hover-info внутри элемента, на который нажали
  var hoverDiv = element.querySelector('.hover-info');

  // Проверяем, является ли hoverDiv видимым
  if (hoverDiv.classList.contains('visible')) {
    // Если hoverDiv уже видим, скрываем его
    hoverDiv.classList.remove('visible');
  } else {
    // Если hoverDiv не видим, сначала скрываем все .hover-info
    var hoverDivs = document.querySelectorAll('.hover-info.visible');
    hoverDivs.forEach(function(div) {
      div.classList.remove('visible');
    });

    // Затем делаем hoverDiv видимым
    hoverDiv.classList.add('visible');
  }
}

// Скрыть все .hover-info при клике вне .image-container
document.body.addEventListener('click', function() {
  var hoverDivs = document.querySelectorAll('.hover-info.visible');
  hoverDivs.forEach(function(div) {
    div.classList.remove('visible');
  });
});
