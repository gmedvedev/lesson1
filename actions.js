path = require('path');
// Actions

var Actions = {
  getUser: function (req, res) {
      res.render('user', { user: { name: "hegel", picture: "hegel.jpg" } });
    },
   getPost: function(req,res) {
    res.render('post', { post: { name: "hegel", text: "Дело в том, что умножение двух векторов (скалярное) охватывает неопровержимый интеграл по бесконечной области. Интеграл от функции комплексной переменной переворачивает многомерный Наибольший Общий Делитель (НОД). Линейное уравнение, общеизвестно, позитивно охватывает скачок функции. Первообразная функция восстанавливает метод последовательных приближений. Число е развивает действительный интеграл от функции, обращающейся в бесконечность в изолированной точке. Определитель системы линейных уравнений, общеизвестно, осмысленно программирует ортогональный определитель."} });
   }
};

module.exports = Actions;