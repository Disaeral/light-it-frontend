Приложение интернет-магазина с функциями авторизации и оставления комментариев с рейтингом.
Стек: react, mobx, axios
Стили: Bootstrap
Для навигации и отрисовки компонентов: react, react-router-dom
Стейт-менеджер: mobx, mobx-react-lite
Запросы к серверу: axios, jwt-decode(используется на backend)

Приложение состоит из трёх страниц:
Главная, Логин/Авторизация, Просмотр конкретного устройства

Главная страница содержит список всех устройств, их название, цену и рейтинг
Логин/Авторизация - форма, меняющая название в зависимости от состояния приложения(клик по ссылке меняет названия полей и формы)
Просмотр устройства - детальная информация об устройстве, отзвывы + форма отправки отзыва(доступна только авторизованным пользователям)

Версия в разработке, запуск: yarn start
